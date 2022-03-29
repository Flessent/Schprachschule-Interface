import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.state';


export const LOGIN_STATE_NAME = 'username';
export const LOGIN_STATE_PASSWORD = 'password';
const getLoginState = createFeatureSelector<LoginState>(LOGIN_STATE_NAME);
const getLoginStatePassword = createFeatureSelector<LoginState>(LOGIN_STATE_PASSWORD);

export const isAuthenticated = createSelector(getLoginState,  (state) => {
console.log('ich bin isAuthenticated'+state.user);
  return state.user ? true : false;
});
export const isAuthenticated1 = createSelector(getLoginStatePassword,  (state) => {
console.log('ich bin isAuthenticated'+state.user);
  return state.user ? true : false;
});
export const getUsername = createSelector(getLoginState, (state) => {
  return state.user ? state.user.username : null;
});

export const getVerbundenePerson = createSelector(getLoginState, (state) => {
  return state.personne ? state.personne : null;
});

