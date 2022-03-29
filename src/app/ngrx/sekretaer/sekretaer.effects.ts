import {Injectable} from "@angular/core";
import {Actions, createEffect,Effect, ofType} from "@ngrx/effects";
import {Observable, of, asyncScheduler} from "rxjs";
import {Action} from "@ngrx/store";
import { Store } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {catchError, map,exhaustMap, concatMap,mergeMap,tap,withLatestFrom,switchMap,filter} from "rxjs/operators";
import {dummyAction} from '../login/login.actions';
import {getSekretaer} from './sekretaer.selector'
import {SekretaerService} from "../../services/sekretaer/sekretaer.service";
import {Sekretaer} from "../../model/sekretaer";
import {AppState} from '../../Appstore/app.state';
import {SaveNewSekretaerActions,SaveNewSekretaerActionsSuccess,SaveNewSekretaerActionsError,GetAllSekretaerActions,GetAllSekretaerActionsSuccess,GetAllSekretaerActionsError,
GetAllSekretaerByUsernameActions,GetAllSekretaerByUsernameActionsSuccess,GetAllSekretaerByUseranmeActionsError,GetOneSekretaerActions,GetOneSekretaerActionsSuccess,
GetOneSekretaerActionsError,UpdateSekretaerActions,UpdateSekretaerActionsSuccess,DeleteSekretaerActions,DeleteSekretaerActionsSuccess} from "./sekretaer.actions";
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
@Injectable()
export class  SekretaerEffects{

  constructor(private  effectActions$:Actions,private sekretaerServices:SekretaerService, private store : Store<AppState>) {}

 getAllSekretaerEffect$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(GetAllSekretaerActions),
      withLatestFrom(this.store.select(getSekretaer)),
      mergeMap(([action, listSekretaers]) => {
        if (!listSekretaers.length || listSekretaers.length === 1) {
          return this.sekretaerServices.getListSekretaer().pipe(
            map((listSekretaers) => {
              return GetAllSekretaerActionsSuccess({ listSekretaer: listSekretaers });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

// Save new Sprache

   saveNewSekretaerEffect$ = createEffect(() => {
      return this.effectActions$.pipe(
        ofType(SaveNewSekretaerActions),
        mergeMap((action) => {
          return this.sekretaerServices.saveSekretaer(action.newSekretaer).pipe(
            map((data) => {
              return SaveNewSekretaerActionsSuccess({ newSekretaer: data });
            })
          );
        })
      );
    });
// Abholung einer einzelnen Sprache

getOneSekretaer$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/liste-sekretaer/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root['params']['username'];// payload est un objet  de type  RouterNavigatedPayload<T> apparetant ä RouterNavigatedAction(voir doc)
      }),
      withLatestFrom(this.store.select(getSekretaer)),
      switchMap(([username, sekretaer]) => {
        if (!sekretaer.length) {
          return this.sekretaerServices.getSekretaerByUsername(username).pipe(
            map((sekretaer) => {
              const sekretaerData = [{ ...sekretaer, username }];
              return GetAllSekretaerActionsSuccess({ listSekretaer: sekretaerData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  // get one Sprache By codeSprache
  getOneSekretaerByUsername$ = createEffect(() => {
       return this.effectActions$.pipe(
         ofType(GetOneSekretaerActions),
         switchMap((usernameSekretaer) => {
             return this.sekretaerServices.getSekretaerByUsername(usernameSekretaer.usernameSekretaer).pipe(
               map((sekretaer : Sekretaer) => {
                 const sekretaerData = sekretaer;
                 return GetOneSekretaerActionsSuccess({ sekretaer: sekretaerData });
               })
             );

           return of(dummyAction());
         })
       );
     });










  updateSekretaer$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(UpdateSekretaerActions),
      switchMap((action) => {
        return this.sekretaerServices.updateSekretaer(action.sekretaer).pipe(
                  tap(data=> console.log('ich bin effect'+data)),
          map((data) => {
            const updatedSekretaer: Update<Sekretaer> = {
              id: action.sekretaer.username as string,
              changes: {     //id und changes sind für die Teilaktualisierung einer Sammlung, sie sind die Property von der Schnittstelle Update (voir Doc)
                ...action.sekretaer,
              },
            };
            return UpdateSekretaerActionsSuccess({ sekretaer: updatedSekretaer });
          })
        );
      })
    );
  });

  deleteSekretaer$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(DeleteSekretaerActions),
      switchMap((action) => {
        return this.sekretaerServices.deleteSekretaer(action.usernameSekretaer).pipe(
          map((data) => {
            return DeleteSekretaerActionsSuccess({ usernameSekretaer: action.usernameSekretaer });
          })
        );
      })
    );
  });


}
