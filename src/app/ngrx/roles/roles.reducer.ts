import {createReducer,on} from '@ngrx/store';
import {GetAllRolesActionsSuccess,SaveNewRolesActionsSuccess,DeleteRolesActionsSuccess,UpdateRolesActionsSuccess} from './roles.actions';
import {rolesAdapter} from './roles.state';
import {RolesState,initState} from "./roles.state";

export const _rolesReducer= createReducer(
initState,
  on(GetAllRolesActionsSuccess, (state, action) => {
     return rolesAdapter.setAll(action.listRoles, {// Die aktuelle Sammlung wird  durch die bereitgestellte Sammlung ersetzt.Man kann das als ein Update sehen
       ...state,
       listRoles: action.listRoles
     });

   }),

 on(SaveNewRolesActionsSuccess, (state, action) => {
    return rolesAdapter.addOne(action.newRoles, {
      ...state,
     listRoles: [...state.listRoles],
    });
  }),
      on(DeleteRolesActionsSuccess, (state, { codeRole }) => {
         return rolesAdapter.removeOne(codeRole, state);
       }),
 on(UpdateRolesActionsSuccess, (state, action) => {
      return rolesAdapter.updateOne(action.roles, state); //updateOne aktualisiert eine Entität in der Sammlung
    }),

);


export function rolesReducer(state:any, action:any) {
  return _rolesReducer(state, action);
}
