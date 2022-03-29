import { RouterStateUrl } from '../../Appstore/router/custom-serializer';
import { getCurrentRoute } from '../../Appstore/router/router.selector';
import { lehrerAdapter, LehrerState } from './lehrer.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';

export const LEHRER_STATE_NAME = 'lehrer';
const getLehrerState = createFeatureSelector<LehrerState>(LEHRER_STATE_NAME);// Erstellung einer FeatureSelector-Funktion,deren Name SPRACHE_STATE_NAME ist
export const lehrerSelectors = lehrerAdapter.getSelectors(); // getSelectors() stellt Funktionen zum Auswählen der Informationen aus der Entität bereit.
//getSelectors() erlaubt uns einen Zugang zu Funktionen, die für Entitätsverwaltung sind : select, remove, update,etc..
export const getLehrer = createSelector(getLehrerState, lehrerSelectors.selectAll);
// selectAll  ordnet das state.idsArray zu und gibt ein Array von Entitäten in derselben Reihenfolge zurück.
export const getLehrerEntities = createSelector(
  getLehrerState,
  lehrerSelectors.selectEntities // selectEntities retourne un selector de la forme :   selectEntities: Selector<EntityCollection<T>, T[]>
  //selectEntities gibt die totale Entität-Dictionary zurück
);

export const getLehrerByUsername = createSelector(// on recupere un item-sprache grace a son libelle
  getLehrerEntities,// wir zeigen zuerst die Liste/Dictionary von allen lehrer an,die von getLehrerEntities zurückgegeben wurden
  getCurrentRoute, // wir nehmen die aktuelle Route zurück
  (lehrer, route: RouterStateUrl) => {
    return lehrer ? lehrer[route.params['username']] : null;// dans la route, on met le parametre username : http:localhost// listeLehrer/username
  }
);





//export const getCount = createSelector(getLehrerState, (state) => state.count);// wir zählen die in State vorhandenen Lehrer
