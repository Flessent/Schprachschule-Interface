import { RouterStateUrl } from '../../Appstore/router/custom-serializer';
import { getCurrentRoute } from '../../Appstore/router/router.selector';
import { betreuerAdapter, BetreuerState } from './betreuer.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';

export const BETREUER_STATE_NAME = 'betreuer';
const getBetreuerState = createFeatureSelector<BetreuerState>(BETREUER_STATE_NAME);// Erstellung einer FeatureSelector-Funktion,deren Name SPRACHE_STATE_NAME ist
export const betreuerSelectors = betreuerAdapter.getSelectors(); // getSelectors() stellt Funktionen zum Auswählen der Informationen aus der Entität bereit.
//getSelectors() erlaubt uns einen Zugang zu Funktionen, die für Entitätsverwaltung sind : select, remove, update,etc..
export const getBetreuer = createSelector(getBetreuerState, betreuerSelectors.selectAll);
// selectAll  ordnet das state.idsArray zu und gibt ein Array von Entitäten in derselben Reihenfolge zurück.
export const getBetreuerEntities = createSelector(
  getBetreuerState,
  betreuerSelectors.selectEntities // selectEntities retourne un selector de la forme :   selectEntities: Selector<EntityCollection<T>, T[]>
  //selectEntities gibt die totale Entität-Dictionary zurück
);

export const getBetreuerByUsername = createSelector(// on recupere un item-sprache grace a son libelle
  getBetreuerEntities,// wir zeigen zuerst die Liste/Dictionary von allen betreuer an,die von getBetreuerEntities zurückgegeben wurden
  getCurrentRoute, // wir nehmen die aktuelle Route zurück
  (betreuer, route: RouterStateUrl) => {
    return betreuer ? betreuer[route.params['username']] : null;// dans la route, on met le parametre username : http:localhost// listeBetreuer/username
  }
);





//export const getCount = createSelector(getBetreuerState, (state) => state.count);// wir zählen die in State vorhandenen Betreuer
