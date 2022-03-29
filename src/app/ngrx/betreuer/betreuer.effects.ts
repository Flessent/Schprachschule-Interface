import {Injectable} from "@angular/core";
import {Actions, createEffect,Effect, ofType} from "@ngrx/effects";
import {Observable, of, asyncScheduler} from "rxjs";
import {Action} from "@ngrx/store";
import { Store } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {catchError, map,exhaustMap, concatMap,mergeMap,tap,withLatestFrom,switchMap,filter} from "rxjs/operators";
import {dummyAction} from '../login/login.actions';
import {getBetreuer} from './betreuer.selector'
import {BetreuerService} from "../../services/betreuer/betreuer.service";
import {LehrerService} from "../../services/lehrer/lehrer.service";

import {Betreuer} from "../../model/betreuer";
import {AppState} from '../../Appstore/app.state';
import {SaveNewBetreuerActions,SaveNewBetreuerActionsSuccess,SaveNewBetreuerActionsError,GetAllBetreuerActions,GetAllBetreuerActionsSuccess,GetAllBetreuerActionsError,
GetAllBetreuerByUsernameActions,GetAllBetreuerByUsernameActionsSuccess,GetAllBetreuerByUseranmeActionsError,GetOneBetreuerActions,GetOneBetreuerActionsSuccess,
GetOneBetreuerActionsError,UpdateBetreuerActions,UpdateBetreuerActionsSuccess,DeleteBetreuerActions,DeleteBetreuerActionsSuccess} from "./betreuer.actions";
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
@Injectable()
export class  BetreuerEffects{

  constructor(private  effectActions$:Actions,private lehrerServices:LehrerService, private betreuerServices : BetreuerService, private store : Store<AppState>) {}

 getAllBetreuerEffect$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(GetAllBetreuerActions),
      withLatestFrom(this.store.select(getBetreuer)),
      mergeMap(([action, listBetreuers]) => {
        if (!listBetreuers.length || listBetreuers.length === 1) {
          return this.betreuerServices.getListBetreuer().pipe(
            map((listBetreuers) => {
              return GetAllBetreuerActionsSuccess({ listBetreuer: listBetreuers });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

// Save new Sprache

   saveNewBetreuerEffect$ = createEffect(() => {
      return this.effectActions$.pipe(
        ofType(SaveNewBetreuerActions),
        mergeMap((action) => {
          return this.lehrerServices.saveLehrer(action.newBetreuer).pipe(
            map((data) => {
              return SaveNewBetreuerActionsSuccess({ newBetreuer: data });
            })
          );
        })
      );
    });
// Abholung einer einzelnen Sprache

getOneBetreuer$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/liste-betreuer/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root['params']['username'];// payload est un objet  de type  RouterNavigatedPayload<T> apparetant ä RouterNavigatedAction(voir doc)
      }),
      withLatestFrom(this.store.select(getBetreuer)),
      switchMap(([username, betreuer]) => {
        if (!betreuer.length) {
          return this.betreuerServices.getBetreuerByUsername(username).pipe(
            map((betreuer) => {
              const betreuerData = [{ ...betreuer, username }];
              return GetAllBetreuerActionsSuccess({ listBetreuer: betreuerData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  // get one Sprache By codeSprache
  getOneBetreuerByUsername$ = createEffect(() => {
       return this.effectActions$.pipe(
         ofType(GetOneBetreuerActions),
         switchMap((usernameBetreuer) => {
             return this.betreuerServices.getBetreuerByUsername(usernameBetreuer.usernameBetreuer).pipe(
               map((betreuer : Betreuer) => {
                 const betreuerData = betreuer;
                 return GetOneBetreuerActionsSuccess({ betreuer: betreuerData });
               })
             );

           return of(dummyAction());
         })
       );
     });










  updateBetreuer$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(UpdateBetreuerActions),
      switchMap((action) => {
        return this.betreuerServices.updateBetreuer(action.betreuer).pipe(
                  tap(data=> console.log('ich bin effect'+data)),
          map((data) => {
            const updatedBetreuer: Update<Betreuer> = {
              id: action.betreuer.username as string,
              changes: {     //id und changes sind für die Teilaktualisierung einer Sammlung, sie sind die Property von der Schnittstelle Update (voir Doc)
                ...action.betreuer,
              },
            };
            return UpdateBetreuerActionsSuccess({ betreuer: updatedBetreuer });
          })
        );
      })
    );
  });

  deleteBetreuer$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(DeleteBetreuerActions),
      switchMap((action) => {
        return this.betreuerServices.deleteBetreuer(action.usernameBetreuer).pipe(
          map((data) => {
            return DeleteBetreuerActionsSuccess({ usernameBetreuer: action.usernameBetreuer });
          })
        );
      })
    );
  });



}
