import { RouterStateUrl } from '../../Appstore/router/custom-serializer';
import { getCurrentRoute } from '../../Appstore/router/router.selector';
import { sprachenAdapter, SprachenState } from './sprachen.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';

export const SPRACHE_STATE_NAME = 'sprachen';
const getSprachenState = createFeatureSelector<SprachenState>(SPRACHE_STATE_NAME);// Erstellung einer FeatureSelector-Funktion,deren Name SPRACHE_STATE_NAME ist
export const sprachenSelectors = sprachenAdapter.getSelectors(); // getSelectors() stellt Funktionen zum Auswählen der Informationen aus der Entität bereit.
//getSelectors() erlaubt uns einen Zugang zu Funktionen, die für Entitätsverwaltung sind : select, remove, update,etc..

export const getInitSprachen = createSelector(getSprachenState, sprachenSelectors.selectAll, (state)=>{
return state.listSprachen;
} );





export const getSprachen = createSelector(getSprachenState, sprachenSelectors.selectAll );
// selectAll  ordnet das state.idsArray zu und gibt ein Array von Entitäten in derselben Reihenfolge zurück.
export const getSpracheEntities = createSelector(
  getSprachenState,
  sprachenSelectors.selectEntities // selectEntities retourne un selector de la forme :   selectEntities: Selector<EntityCollection<T>, T[]>
  //selectEntities gibt die totale Entität-Dictionary zurück
);

export const getSpracheByCodeSprache = createSelector(// on recupere un item-sprache grace a son libelle
  getSpracheEntities,// wir zeigen zuerst die Liste/Dictionary von allen sprachen an,die von getSpracheEntities zurückgegeben wurden
  getCurrentRoute, // wir nehmen die aktuelle Route zurück
  (sprachen, route: RouterStateUrl) => {
    return sprachen ? sprachen[route.params['codeSprache']] : null;// dans la route, on met le parametre codeSprache : http:localhost// listeSprache/codeSprache
  }
);

export const getSpracheByLibelle = createSelector(// on recupere un item-sprache grace a son libelle
  getSpracheEntities,// wir zeigen zuerst die Liste/Dictionary von allen sprachen an,die von getSpracheEntities zurückgegeben wurden
  getCurrentRoute, // wir nehmen die aktuelle Route zurück
  (sprachen, route: RouterStateUrl) => {
    return sprachen ? sprachen[route.params['libelle']] : null;// dans la route, on met le parametre codeSprache : http:localhost// listeSprache/codeSprache
  }
);

export const getSpracheById = createSelector(
  getSpracheEntities,
  getCurrentRoute,
  (sprachen, route: RouterStateUrl) => {
    return sprachen ? sprachen[route.params['id']] : null;
  }
);


export const getListSprachen = createSelector(getSprachenState, (state) => state.listSprachen);// wir zählen die in State vorhandenen Sprachen
