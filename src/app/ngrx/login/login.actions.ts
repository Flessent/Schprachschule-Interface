import {createAction, props} from '@ngrx/store';
import {Users} from "../../model/user";
export const LOGIN_START ='[Login page ] Sendung der  Authentifizierungsdaten';
export const LOGIN_SUCCESS ='[Login page ] erfolgreiches Einloggen';
export const LOGIN_FAIL ='[Login page ] erfolgloses Einlogge';
export const LOGOUT_ACTION = '[Login page] Ausloggen';
import {Personne} from "../../model/personne";


export const loginActionStart = createAction(
LOGIN_START,
props<{username:string; password:string}>()
);

export const loginActionSuccess=createAction(
LOGIN_SUCCESS,
props<{user:Users; redirect: boolean}>()

);
export const gemeinsameInfosVerbundenePersonAction=createAction(
'[Loading Infos über verbundene Person] ',
props<{personne:Personne}>()

);
export const gemeinsameInfosVerbundenePersonActionSuccess=createAction(
'[erfolgreiches Loading Infos über verbundene Person ] '
);

export const loginActionError=createAction(
LOGIN_FAIL,
props<{fehler: string}>()
);
export const dummyAction = createAction('[dummy action]');
export const logoutAction = createAction(LOGOUT_ACTION);
