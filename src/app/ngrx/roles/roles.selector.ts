import { RouterStateUrl } from '../../Appstore/router/custom-serializer';
import { getCurrentRoute } from '../../Appstore/router/router.selector';
import { rolesAdapter, RolesState } from './roles.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterState } from '@angular/router';

export const ROLES_STATE_NAME = 'roles';
const getRolesState = createFeatureSelector<RolesState>(ROLES_STATE_NAME);// Erstellung einer FeatureSelector-Funktion,deren Name SPRACHE_STATE_NAME ist
export const rolesSelectors = rolesAdapter.getSelectors(); // getSelectors() stellt Funktionen zum Auswählen der Informationen aus der Entität bereit.
//getSelectors() erlaubt uns einen Zugang zu Funktionen, die für Entitätsverwaltung sind : select, remove, update,etc..
export const getRoles = createSelector(getRolesState, rolesSelectors.selectAll);
// selectAll  ordnet das state.idsArray zu und gibt ein Array von Entitäten in derselben Reihenfolge zurück.
export const getRolesEntities = createSelector(
  getRolesState,
  rolesSelectors.selectEntities
  //selectEntities gibt die totale Entität-Dictionary zurück
);
// getRolesByCodeRoles für die update
export const getRolesByCodeRoles = createSelector(// on recupere un item-sprache grace a son libelle
  getRolesEntities,// wir zeigen zuerst die Liste/Dictionary von allen sprachen an,die von getSpracheEntities zurückgegeben wurden
  getCurrentRoute, // wir nehmen die aktuelle Route zurück
  (roles, route: RouterStateUrl) => {
    return roles ? roles[route.params['codeRole']] : null;// dans la route, on met le parametre codeSprache : http:localhost// listeSprache/codeSprache
  }
);
export const getListRoles = createSelector(getRolesState, (state) => state.listRoles);// wir zählen die in State vorhandenen Sprachen
