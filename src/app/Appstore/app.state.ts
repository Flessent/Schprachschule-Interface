import { LOGIN_STATE_NAME } from '../ngrx/login/login.selector';
import { SharedState } from './shared/shared.state';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedReducer } from './shared/shared.reducer';
import { LoginReducer } from '../ngrx/login/login.reducer';
import { LoginState } from '../ngrx/login/login.state';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { KURS_STATE_NAME } from '../ngrx/kurs/kurs.selector';
import { LEHRER_STATE_NAME } from '../ngrx/lehrer/lehrer.selector';
import { SPRACHE_STATE_NAME } from '../ngrx/sprache/sprachen.selector';
import { NIVEAU_STATE_NAME } from '../ngrx/niveau/niveau.selector';
import { ROLES_STATE_NAME } from '../ngrx/roles/roles.selector';
import { KursState } from '../ngrx/kurs/kurs.state';
import { NiveauState } from '../ngrx/niveau/niveau.state';
import { LehrerState } from '../ngrx/lehrer/lehrer.state';
import { RolesState } from '../ngrx/roles/roles.state';
import { SprachenState } from '../ngrx/sprache/sprachen.state';


// il faut noter ici deux import tres importants : routerReducer et RouterReducerState

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [LOGIN_STATE_NAME]: LoginState;
  [SPRACHE_STATE_NAME] :SprachenState;
  [KURS_STATE_NAME] :KursState;
  [NIVEAU_STATE_NAME]: NiveauState;
  [LEHRER_STATE_NAME] : LehrerState;
  [ROLES_STATE_NAME]:RolesState;
  router: RouterReducerState;
}
export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [LOGIN_STATE_NAME]: LoginReducer,
  router: routerReducer,
};

