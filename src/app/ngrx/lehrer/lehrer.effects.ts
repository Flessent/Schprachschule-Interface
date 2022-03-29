import {Injectable} from "@angular/core";
import {Actions, createEffect,Effect, ofType} from "@ngrx/effects";
import {Observable, of, asyncScheduler} from "rxjs";
import {Action} from "@ngrx/store";
import { Store } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {catchError, map,exhaustMap, concatMap,mergeMap,tap,withLatestFrom,switchMap,filter} from "rxjs/operators";
import {dummyAction} from '../login/login.actions';
import {getLehrer} from './lehrer.selector'
import {LehrerService} from "../../services/lehrer/lehrer.service";
import {Lehrer} from "../../model/lehrer";
import {AppState} from '../../Appstore/app.state';
import {SaveNewLehrerActions,SaveNewLehrerActionsSuccess,SaveNewLehrerActionsError,GetAllLehrerActions,GetAllLehrerActionsSuccess,GetAllLehrerActionsError,
GetAllLehrerByUsernameActions,GetAllLehrerByUsernameActionsSuccess,GetAllLehrerByUseranmeActionsError,GetOneLehrerActions,GetOneLehrerActionsSuccess,
GetOneLehrerActionsError,UpdateLehrerActions,UpdateLehrerActionsSuccess,DeleteLehrerActions,DeleteLehrerActionsSuccess} from "./lehrer.actions";
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
@Injectable()
export class  LehrerEffects{

  constructor(private  effectActions$:Actions,private lehrerServices:LehrerService, private store : Store<AppState>) {}

 getAllLehrerEffect$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(GetAllLehrerActions),
      withLatestFrom(this.store.select(getLehrer)),
      mergeMap(([action, listLehrers]) => {
        if (!listLehrers.length || listLehrers.length === 1) {
          return this.lehrerServices.getListLehrer().pipe(
            map((listLehrers) => {
              return GetAllLehrerActionsSuccess({ listLehrer: listLehrers });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

// Save new Sprache

   saveNewLehrerEffect$ = createEffect(() => {
      return this.effectActions$.pipe(
        ofType(SaveNewLehrerActions),
        mergeMap((action) => {
          return this.lehrerServices.saveLehrer(action.newLehrer).pipe(
            map((data) => {
              return SaveNewLehrerActionsSuccess({ newLehrer: data });
            })
          );
        })
      );
    });
// Abholung einer einzelnen Sprache

getOneLehrer$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/liste-lehrer/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root['params']['username'];// payload est un objet  de type  RouterNavigatedPayload<T> apparetant ä RouterNavigatedAction(voir doc)
      }),
      withLatestFrom(this.store.select(getLehrer)),
      switchMap(([username, lehrer]) => {
        if (!lehrer.length) {
          return this.lehrerServices.getLehrerByUsername(username).pipe(
            map((lehrer) => {
              const lehrerData = [{ ...lehrer, username }];
              return GetAllLehrerActionsSuccess({ listLehrer: lehrerData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  // get one Sprache By codeSprache
  getOneLehrerByUsername$ = createEffect(() => {
       return this.effectActions$.pipe(
         ofType(GetOneLehrerActions),
         switchMap((usernameLehrer) => {
             return this.lehrerServices.getLehrerByUsername(usernameLehrer.usernameLehrer).pipe(
               map((lehrer : Lehrer) => {
                 const lehrerData = lehrer;
                 return GetOneLehrerActionsSuccess({ lehrer: lehrerData });
               })
             );

           return of(dummyAction());
         })
       );
     });










  updateLehrer$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(UpdateLehrerActions),
      switchMap((action) => {
        return this.lehrerServices.updateLehrer(action.lehrer).pipe(
                 // tap(data=> console.log('ich bin effect'+data)),
          map((data) => {
            const updatedLehrer: Update<Lehrer> = {
              id: action.lehrer.username as string,
              changes: {     //id und changes sind für die Teilaktualisierung einer Sammlung, sie sind die Property von der Schnittstelle Update (voir Doc)
                ...action.lehrer,
              },
            };
            return UpdateLehrerActionsSuccess({ lehrer: updatedLehrer });
          })
        );
      })
    );
  });

  deleteLehrer$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(DeleteLehrerActions),
      switchMap((action) => {
        return this.lehrerServices.deleteLehrer(action.usernameLehrer).pipe(
          map((data) => {
            return DeleteLehrerActionsSuccess({ usernameLehrer: action.usernameLehrer });
          })
        );
      })
    );
  });


}
