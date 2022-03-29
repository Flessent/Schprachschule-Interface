import {Injectable} from "@angular/core";
import {SaveNewKursActions,SaveNewKursActionsSuccess,GetAllKurseActions,GetAllKurseActionsSuccess,
DeleteKursActions,DeleteKursActionsSuccess,UpdateKursActions,UpdateKursActionsSuccess
} from './kurs.actions';
import {mergeMap,map,withLatestFrom,switchMap,tap,filter} from 'rxjs/operators';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {KursService} from '../../services/kurs/kurs.service';
import {Store} from '@ngrx/store';
import {dummyAction} from '../login/login.actions';
import {getKurse} from './kurs.selector'
import {AppState} from '../../Appstore/app.state'
import {of} from 'rxjs';
import {Update} from '@ngrx/entity';
import {Kurs} from "../../model/kurs";
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
@Injectable()
export class KursEffects{
constructor(private effectActions$: Actions, private kursService: KursService,private store: Store<AppState>){}
// Abholung der Liste der Kurse
 getAllKurseEffect$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(GetAllKurseActions),
      withLatestFrom(this.store.select(getKurse)),/* recupere la derniere valeur de getSprachen chaque fois que GetAllSprachenActions est appele.
      Il retourne donc un Observable qui contient les deux Observable combines : l'action et le resultat.
      */
      mergeMap(([action, listKurse]) => {
        if (!listKurse.length || listKurse.length === 1) {
          return this.kursService.getListKurse().pipe(
            map((listKurs) => {
              return GetAllKurseActionsSuccess({ listKurse: listKurs });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
// Abholung einer einzelnen Sprache
getOneKurs$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/liste-kurse/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root['params']['codeKurs'];// payload est un objet  de type  RouterNavigatedPayload<T> apparetant ä RouterNavigatedAction(voir doc)
      }),
      withLatestFrom(this.store.select(getKurse)),
      switchMap(([codeKurs, kurse]) => {
        if (!kurse.length) {
          return this.kursService.getKursByCodeKurs(codeKurs).pipe(
            map((kurs) => {
              const kursData = [{ ...kurs, codeKurs }];
              return GetAllKurseActionsSuccess({ listKurse: kursData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
// Save new Kurs

   saveNewKursEffect$ = createEffect(() => {
      return this.effectActions$.pipe(
        ofType(SaveNewKursActions),
        mergeMap((action) => {
       // debugger;
          return this.kursService.saveKurs(action.newKurs).pipe(
            map((data) => {
              return SaveNewKursActionsSuccess({ newKurs: data });
            })
          );
        })
      );
    });
// Update eines Kurses
updateKurs$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(UpdateKursActions),
      switchMap((action) => {
        return this.kursService.updateKurs(action.kurs).pipe(
                  tap(data=> console.log('ich bin effect'+data)),
          map((data) => {
            const updateKurs: Update<Kurs> = {
              id: action.kurs.codeKurs as string,
              changes: {     //id und changes sind für die Teilaktualisierung einer Sammlung, sie sind die Property von der Schnittstelle Update (voir Doc)
                ...action.kurs,
              },
            };
            return UpdateKursActionsSuccess({ kurs: updateKurs });
          })
        );
      })
    );
  });
// Ein Niveau Löschen
  deleteKurs$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(DeleteKursActions),
      switchMap((action) => {
        return this.kursService.deleteKurs(action.codeKurs).pipe(
          map((data) => {
            return DeleteKursActionsSuccess({ codeKurs: action.codeKurs });
          })
        );
      })
    );
  });

}
