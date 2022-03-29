import {Injectable} from "@angular/core";
import {SaveNewNiveauActions,SaveNewNiveauActionsSuccess,GetAllNiveausActions,GetAllNiveausActionsSuccess,
DeleteNiveauActions,DeleteNiveauActionsSuccess,UpdateNiveauActions,UpdateNiveauActionsSuccess
} from './niveau.actions';
import {mergeMap,map,withLatestFrom,switchMap,tap,filter} from 'rxjs/operators';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {NiveauService} from '../../services/niveau/niveau.service';
import {Store} from '@ngrx/store';
import {dummyAction} from '../login/login.actions';
import {getNiveaus} from './niveau.selector'
import {AppState} from '../../Appstore/app.state'
import {of} from 'rxjs';
import {Update} from '@ngrx/entity';
import {Niveau} from "../../model/niveau";
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
@Injectable()
export class NiveauEffects{
constructor(private effectActions$: Actions, private niveauService: NiveauService,private store: Store<AppState>){}
// Abholung der Liste der Niveaus
 getAllNiveausEffect$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(GetAllNiveausActions),
      withLatestFrom(this.store.select(getNiveaus)),/* recupere la derniere valeur de getSprachen chaque fois que GetAllSprachenActions est appele.
      Il retourne donc un Observable qui contient les deux Observable combines : l'action et le resultat.
      */
      mergeMap(([action, listNiveaus]) => {
        if (!listNiveaus.length || listNiveaus.length === 1) {
          return this.niveauService.getListNiveaus().pipe(
            map((listNiveau) => {
              return GetAllNiveausActionsSuccess({ listNiveaus: listNiveau });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
// Abholung einer einzelnen Sprache
getOneNiveau$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/liste-niveaus/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root['params']['codeNiveau'];// payload est un objet  de type  RouterNavigatedPayload<T> apparetant ä RouterNavigatedAction(voir doc)
      }),
      withLatestFrom(this.store.select(getNiveaus)),
      switchMap(([codeNiveau, niveaus]) => {
        if (!niveaus.length) {
          return this.niveauService.getNiveauByCodeNiveau(codeNiveau).pipe(
            map((niveau) => {
              const niveauData = [{ ...niveau, codeNiveau }];
              return GetAllNiveausActionsSuccess({ listNiveaus: niveauData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
// Save new Niveau

   saveNewNiveauEffect$ = createEffect(() => {
      return this.effectActions$.pipe(
        ofType(SaveNewNiveauActions),
        mergeMap((action) => {
          return this.niveauService.saveNiveau(action.newNiveau).pipe(
            map((data) => {
              return SaveNewNiveauActionsSuccess({ newNiveau: data });
            })
          );
        })
      );
    });
// Update ein Niveau
updateNiveau$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(UpdateNiveauActions),
      switchMap((action) => {
        return this.niveauService.updateNiveau(action.niveau).pipe(
                  tap(data=> console.log('ich bin effect'+data)),
          map((data) => {
            const updatedNiveau: Update<Niveau> = {
              id: action.niveau.codeNiveau as string,
              changes: {     //id und changes sind für die Teilaktualisierung einer Sammlung, sie sind die Property von der Schnittstelle Update (voir Doc)
                ...action.niveau,
              },
            };
            return UpdateNiveauActionsSuccess({ niveau: updatedNiveau });
          })
        );
      })
    );
  });
// Ein Niveau Löschen
  deleteNiveau$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(DeleteNiveauActions),
      switchMap((action) => {
        return this.niveauService.deleteNiveau(action.codeNiveau).pipe(
          map((data) => {
            return DeleteNiveauActionsSuccess({ codeNiveau: action.codeNiveau });
          })
        );
      })
    );
  });

}
