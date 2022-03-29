import { RouterStateUrl } from '../../Appstore/router/custom-serializer';
import { getCurrentRoute } from '../../Appstore/router/router.selector';
import { niveausAdapter, NiveauState } from './niveau.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';





export const NIVEAU_STATE_NAME = 'niveaus';
const getNiveausState = createFeatureSelector<NiveauState>(NIVEAU_STATE_NAME);// Erstellung einer FeatureSelector-Funktion,deren Name SPRACHE_STATE_NAME ist
export const niveausSelectors = niveausAdapter.getSelectors(); // getSelectors() stellt Funktionen zum Auswählen der Informationen aus der Entität bereit.
//getSelectors() erlaubt uns einen Zugang zu Funktionen, die für Entitätsverwaltung sind : select, remove, update,etc..
export const getNiveaus = createSelector(getNiveausState, niveausSelectors.selectAll);
// selectAll  ordnet das state.idsArray zu und gibt ein Array von Entitäten in derselben Reihenfolge zurück.
export const getNiveausEntities = createSelector(
  getNiveausState,
  niveausSelectors.selectEntities
  //selectEntities gibt die totale Entität-Dictionary zurück
);

export const getNiveauByCodeNiveau = createSelector(// on recupere un item-sprache grace a son libelle
  getNiveausEntities,// wir zeigen zuerst die Liste/Dictionary von allen sprachen an,die von getSpracheEntities zurückgegeben wurden
  getCurrentRoute, // wir nehmen die aktuelle Route zurück
  (niveaus, route: RouterStateUrl) => {
    return niveaus ? niveaus[route.params['codeNiveau']] : null;// dans la route, on met le parametre codeSprache : http:localhost// listeSprache/codeSprache
  }
);
export const getCount = createSelector(getNiveausState, (state) => state.count);// wir zählen die in State vorhandenen Sprachen
