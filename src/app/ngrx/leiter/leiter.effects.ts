import {Injectable} from "@angular/core";
import {SpracheService} from "../../services/sprache/sprache.service";
import {Actions, createEffect,Effect, ofType} from "@ngrx/effects";
import {Observable, of, asyncScheduler} from "rxjs";
import {Action} from "@ngrx/store";
import { Store } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import {GetAllSprachenActions,GetAllSprachenActionsSuccess,GetAllSprachenActionsError,NewSpracheActions,
NewSpracheActionsSuccess,NewSpracheActionsError,
SaveNewSpracheActions, SaveNewSpracheActionsSuccess,SaveNewSpracheActionsError,UpdateSpracheActions,UpdateSpracheActionsSuccess,
DeleteSpracheActionsSuccess,DeleteSpracheActions, GetOneSpracheActions,GetOneSpracheActionsSuccess,GetOneSpracheActionsError,
GetAllSprachenByCodeSprachenActions,GetAllSprachenByCodeSprachenActionsSuccess

} from "./sprachen.actions";
import {catchError, map,exhaustMap, concatMap,mergeMap,tap,withLatestFrom,switchMap,filter} from "rxjs/operators";
import {Sprache} from "../../model/sprache";
import {dummyAction} from '../login/login.actions';
import {getSprachen} from './sprachen.selector'
import {AppState} from '../../Appstore/app.state'
import {
  RouterNavigatedAction,
  routerNavigationAction,
  ROUTER_NAVIGATION,
} from '@ngrx/router-store';
@Injectable()
export class  SprachenEffects{

  constructor(private  effectActions$:Actions,private spracheServices:SpracheService, private store : Store<AppState>) {}
 /*Das Lesen des Zustands erfolgt mit der selectMethode, die einen Projektor benötigt, der beschreibt, WIE der Zustand abgerufen und/oder transformiert wird.
  Selektoren geben neue Werte aus, wenn sich diese Werte "ändern" - der neue Wert unterscheidet sich durch den Vergleich nicht mehr vom vorherigen Wert.*/
 getAllSprachenEffect$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(GetAllSprachenActions),
      withLatestFrom(this.store.select(getSprachen)),/* recupere la derniere valeur de getSprachen chaque fois que GetAllSprachenActions est appele.
      Il retourne donc un Observable qui contient les deux Observable combines : l'action et le resultat.
      */
      mergeMap(([action, listSprache]) => {
        if (!listSprache.length || listSprache.length === 1) {
          return this.spracheServices.getListSprache().pipe(
            map((listSprache) => {
              return GetAllSprachenActionsSuccess({ listSprache: listSprache });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
//@Effect()
//$init=of(this.getAllSprachenEffect$,asyncScheduler);


// Get All sprache by codeSprache
 /*getAllSprachenByCodeSprachenEffect$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(GetAllSprachenByCodeSprachenActions),
     withLatestFrom(this.store.select(getSprachen)),
      mergeMap(([action, listCodeSprache]) => {
        if (!listCodeSprache.length || listCodeSprache.length === 1) {
          return this.spracheServices.getAllSprachenByCodeSprache(action.listCodeSprache).pipe(
            map((listCodeSprache) => {
              return GetAllSprachenByCodeSprachenActionsSuccess({ listSprache: listCodeSprache });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });
*/







// Action New Sprache
  /* Le traitement ici est different parce qu'il ne s´agit pas de modifier ou de recuperer des doees existantes mais d'ajouter de nouvelles donnees,
   donc pas besoin de MergeMap, mais plutot map()*/
  newSpracheEffect$ =createEffect(
     ()=>this.effectActions$.pipe(
       ofType(NewSpracheActions),//on verifie le type de l´action
       map( ()=> NewSpracheActionsSuccess() ),
       catchError( (err) =>of(NewSpracheActionsError(err.message)))
        ) );


// Save new Sprache

   saveNewSpracheEffect$ = createEffect(() => {
      return this.effectActions$.pipe(
        ofType(SaveNewSpracheActions),
        mergeMap((action) => {
          return this.spracheServices.saveSprache(action.newSprache).pipe(
            map((data) => {
              return SaveNewSpracheActionsSuccess({ newSprache: data });
            })
          );
        })
      );
    });
// Abholung einer einzelnen Sprache
getOneSprache$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: RouterNavigatedAction) => {
        return r.payload.routerState.url.startsWith('/liste-sprache/details');
      }),
      map((r: RouterNavigatedAction) => {
        return r.payload.routerState.root['params']['codeSprache'];// payload est un objet  de type  RouterNavigatedPayload<T> apparetant ä RouterNavigatedAction(voir doc)
      }),
      withLatestFrom(this.store.select(getSprachen)),
      switchMap(([codeSprache, sprachen]) => {
        if (!sprachen.length) {
          return this.spracheServices.getSpracheByCodeSprache(codeSprache).pipe(
            map((sprache) => {
              const spracheData = [{ ...sprache, codeSprache }];
              return GetAllSprachenActionsSuccess({ listSprache: spracheData });
            })
          );
        }
        return of(dummyAction());
      })
    );
  });

  // get one Sprache By codeSprache
  getOneSpracheByCodeSprache$ = createEffect(() => {
       return this.effectActions$.pipe(
         ofType(GetOneSpracheActions),
         switchMap((codeSprache) => {
             return this.spracheServices.getSpracheByCodeSprache(codeSprache.codeSprache).pipe(
               map((sprache : Sprache) => {
                 const spracheData = sprache;
                 return GetOneSpracheActionsSuccess({ sprache: spracheData });
               })
             );

           return of(dummyAction());
         })
       );
     });










  updateSprache$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(UpdateSpracheActions),
      switchMap((action) => {
        return this.spracheServices.updateSprache(action.sprache).pipe(
                  tap(data=> console.log('ich bin effect'+data)),
          map((data) => {
            const updatedSprache: Update<Sprache> = {
              id: action.sprache.codeSprache as string,
              changes: {     //id und changes sind für die Teilaktualisierung einer Sammlung, sie sind die Property von der Schnittstelle Update (voir Doc)
                ...action.sprache,
              },
            };
            return UpdateSpracheActionsSuccess({ sprache: updatedSprache });
          })
        );
      })
    );
  });

  deleteSprache$ = createEffect(() => {
    return this.effectActions$.pipe(
      ofType(DeleteSpracheActions),
      switchMap((action) => {
        return this.spracheServices.deleteSprache(action.codeSprache).pipe(
          map((data) => {
            return DeleteSpracheActionsSuccess({ codeSprache: action.codeSprache });
          })
        );
      })
    );
  });
/*
// Search Products

searchProductsEffect:Observable<SprachenActions>=createEffect(
  ()=>this.effectActions.pipe(
    ofType(SprachenActionsTypes.SEARCH_SPRACHEN),//on verifie le type de l´action
    mergeMap((action:SprachenActions)=>{//on prend l´action qu´on q recu et on fait appel au service
      return this.spracheServices.getListSprache()//appel de la methode getProducts du backend et on attend les resultats
        .pipe(
          map((products)=>new SearchSprachenActionsSuccess(products) ),//retourne la liste des produits dans le tableau products en cas de succes
  catchError((err )=> of(new SearchSprachenActionsError(err.message)))//en cas d´erreur, on dispache une nouvelle action disant que la requette n´a pas abouti
        )
    } ) ));
*/
























}
