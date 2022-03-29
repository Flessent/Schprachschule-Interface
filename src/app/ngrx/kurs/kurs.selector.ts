import { RouterStateUrl } from '../../Appstore/router/custom-serializer';
import { getCurrentRoute } from '../../Appstore/router/router.selector';
import { kurseAdapter, KursState } from './kurs.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';





export const KURS_STATE_NAME = 'kurse';
const getKurseState = createFeatureSelector<KursState>(KURS_STATE_NAME);// Erstellung einer FeatureSelector-Funktion,deren Name SPRACHE_STATE_NAME ist
export const kurseSelectors = kurseAdapter.getSelectors(); // getSelectors() stellt Funktionen zum Auswählen der Informationen aus der Entität bereit.
//getSelectors() erlaubt uns einen Zugang zu Funktionen, die für Entitätsverwaltung sind : select, remove, update,etc..
export const getKurse = createSelector(getKurseState, kurseSelectors.selectAll);
// selectAll  ordnet das state.idsArray zu und gibt ein Array von Entitäten in derselben Reihenfolge zurück.
export const getKurseEntities = createSelector(
  getKurseState,
  kurseSelectors.selectEntities
  //selectEntities gibt die totale Entität-Dictionary zurück
);

export const getKursByCodeKurs = createSelector(// on recupere un item-sprache grace a son libelle
  getKurseEntities,// wir zeigen zuerst die Liste/Dictionary von allen sprachen an,die von getSpracheEntities zurückgegeben wurden
  getCurrentRoute, // wir nehmen die aktuelle Route zurück
  (kurse, route: RouterStateUrl) => {
    return kurse ? kurse[route.params['codeKurs']] : null;// dans la route, on met le parametre codeSprache : http:localhost// listeSprache/codeSprache
  }
);
export const getCount = createSelector(getKurseState, (state) => state.count);// wir zählen die in State vorhandenen Sprachen
