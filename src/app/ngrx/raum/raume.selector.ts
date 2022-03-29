import { RouterStateUrl } from '../../Appstore/router/custom-serializer';
import { getCurrentRoute } from '../../Appstore/router/router.selector';
import { raumeAdapter, RaumeState } from './raume.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';

export const RAUME_STATE_NAME = 'raume';
const getRaumeState = createFeatureSelector<RaumeState>(RAUME_STATE_NAME);// Erstellung einer FeatureSelector-Funktion,deren Name SPRACHE_STATE_NAME ist
export const raumeSelectors = raumeAdapter.getSelectors(); // getSelectors() stellt Funktionen zum Auswählen der Informationen aus der Entität bereit.
//getSelectors() erlaubt uns einen Zugang zu Funktionen, die für Entitätsverwaltung sind : select, remove, update,etc..
export const getRaume = createSelector(getRaumeState, raumeSelectors.selectAll);
// selectAll  ordnet das state.idsArray zu und gibt ein Array von Entitäten in derselben Reihenfolge zurück.
export const getRaumeEntities = createSelector(
  getRaumeState,
  raumeSelectors.selectEntities
  //selectEntities gibt die totale Entität-Dictionary zurück
);
// getRaumByCodeRaum für die update
export const getRaumByCodeRaum = createSelector(// on recupere un item-sprache grace a son libelle
  getRaumeEntities,// wir zeigen zuerst die Liste/Dictionary von allen sprachen an,die von getSpracheEntities zurückgegeben wurden
  getCurrentRoute, // wir nehmen die aktuelle Route zurück
  (raume, route: RouterStateUrl) => {
    return raume ? raume[route.params['codeRaum']] : null;// dans la route, on met le parametre codeSprache : http:localhost// listeSprache/codeSprache
  }
);
export const getListRaume = createSelector(getRaumeState, (state) => state.listRaume);// wir zählen die in State vorhandenen Sprachen
