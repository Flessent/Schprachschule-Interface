import {Injectable} from "@angular/core";
import {SaveNewRaumActions,SaveNewRaumActionsSuccess,GetAllRaumeActions,GetAllRaumeActionsSuccess,
DeleteRaumActions,DeleteRaumActionsSuccess,UpdateRaumActions,UpdateRaumActionsSuccess
} from './raume.actions';
import {mergeMap,map,withLatestFrom,switchMap,tap,filter} from 'rxjs/operators';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RaumeService} from '../../services/raume/raume.service';
import {Store} from '@ngrx/store';
import {dummyAction} from '../login/login.actions';
import {getRaume} from './raume.selector'
import {AppState} from '../../Appstore/app.state'
import {of} from 'rxjs';
import {Update} from '@ngrx/entity';
import {Raum} from "../../model/raum";
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
@Injectable()
export class RaumeEffects{
constructor(private effectActions$: Actions, private raumeService: RaumeService,private store: Store<AppState>){}
// Abholung der Liste der Raums
 getAllRaumeEffect$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(GetAllRaumeActions),
      withLatestFrom(this.store.select(getRaume)),/* recupere la derniere valeur de getSprachen chaque fois que GetAllSprachenActions est appele.
      Il retourne donc un Observable qui contient les deux Observable combines : l'action et le resultat.
      */
      mergeMap(([action, listRaume]) => {
        if (!listRaume.length || listRaume.length === 1) {
          return this.raumeService.getListRaume().pipe(
            map((listRaume) => {
              return GetAllRaumeActionsSuccess({ listRaume: listRaume });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
// Abholung einer einzelnen Sprache
getOneRaum$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/liste-raume/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root['params']['codeRaum'];// payload est un objet  de type  RouterNavigatedPayload<T> apparetant ä RouterNavigatedAction(voir doc)
      }),
      withLatestFrom(this.store.select(getRaume)),
      switchMap(([codeRaum, raume]) => {
        if (!raume.length) {
          return this.raumeService.getRaumByCodeRaum(codeRaum).pipe(
            map((raum) => {
              const raumeData = [{ ...raum, codeRaum }];
              return GetAllRaumeActionsSuccess({ listRaume: raumeData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
// Save new Raum

   saveNewRaumEffect$ = createEffect(() => {
      return this.effectActions$.pipe(
        ofType(SaveNewRaumActions),
        mergeMap((action) => {
          return this.raumeService.saveRaum(action.newRaum).pipe(
            map((data) => {
              return SaveNewRaumActionsSuccess({ newRaum: data });
            })
          );
        })
      );
    });
// Update ein Raum
updateRaum$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(UpdateRaumActions),
      switchMap((action) => {
        return this.raumeService.updateRaum(action.raum).pipe(
                  tap(data=> console.log('ich bin effect'+data)),
          map((data) => {
            const updatedRaum: Update<Raum> = {
              id: action.raum.codeRaum as string,
              changes: {     //id und changes sind für die Teilaktualisierung einer Sammlung, sie sind die Property von der Schnittstelle Update (voir Doc)
                ...action.raum,
              },
            };
            return UpdateRaumActionsSuccess({ raum: updatedRaum });
          })
        );
      })
    );
  });
// Ein Raum Löschen
  deleteRaum$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(DeleteRaumActions),
      switchMap((action) => {
        return this.raumeService.deleteRaum(action.codeRaum).pipe(
          map((data) => {
            return DeleteRaumActionsSuccess({ codeRaum: action.codeRaum });
          })
        );
      })
    );
  });

}
