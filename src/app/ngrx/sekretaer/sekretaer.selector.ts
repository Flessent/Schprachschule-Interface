import { RouterStateUrl } from '../../Appstore/router/custom-serializer';
import { getCurrentRoute } from '../../Appstore/router/router.selector';
import { sekretaerAdapter, SekretaerState } from './sekretaer.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';

export const SEKRETAER_STATE_NAME = 'sekretaer';
const getSekretaerState = createFeatureSelector<SekretaerState>(SEKRETAER_STATE_NAME);// Erstellung einer FeatureSelector-Funktion,deren Name SPRACHE_STATE_NAME ist
export const sekretaerSelectors = sekretaerAdapter.getSelectors(); // getSelectors() stellt Funktionen zum Auswählen der Informationen aus der Entität bereit.
//getSelectors() erlaubt uns einen Zugang zu Funktionen, die für Entitätsverwaltung sind : select, remove, update,etc..
export const getSekretaer = createSelector(getSekretaerState, sekretaerSelectors.selectAll);
// selectAll  ordnet das state.idsArray zu und gibt ein Array von Entitäten in derselben Reihenfolge zurück.
export const getSekretaerEntities = createSelector(
  getSekretaerState,
  sekretaerSelectors.selectEntities // selectEntities retourne un selector de la forme :   selectEntities: Selector<EntityCollection<T>, T[]>
  //selectEntities gibt die totale Entität-Dictionary zurück
);

export const getSekretaerByUsername = createSelector(// on recupere un item-sprache grace a son libelle
  getSekretaerEntities,// wir zeigen zuerst die Liste/Dictionary von allen sekretaer an,die von getSekretaerEntities zurückgegeben wurden
  getCurrentRoute, // wir nehmen die aktuelle Route zurück
  (sekretaer, route: RouterStateUrl) => {
    return sekretaer ? sekretaer[route.params['username']] : null;// dans la route, on met le parametre username : http:localhost// listeSekretaer/username
  }
);





//export const getCount = createSelector(getSekretaerState, (state) => state.count);// wir zählen die in State vorhandenen Sekretaer
