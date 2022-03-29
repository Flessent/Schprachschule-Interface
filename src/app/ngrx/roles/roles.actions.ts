import {Roles} from "../../model/roles";
import {props,createAction} from '@ngrx/store';
import {Update} from '@ngrx/entity';
export const GetAllRolesActions=createAction(
' Abholung der Liste von Rolesn'
);

export const GetAllRolesActionsSuccess=createAction(
   '[GET_ALL_RAUMES_SUCCESS] erfolgreiche Abholung der Rolesliste',

props< {listRoles: Roles[]} >()
);

// Hinzufügen eines neuen Roles
export const SaveNewRolesActions = createAction (
'[SAVE_RAUME] Hinzufügen eines Roless',
   props<{newRoles:Roles}>()

);
export const SaveNewRolesActionsSuccess =createAction(
'[SAVE_RAUME_SUCCESS] erfolgreiche Anmeldung eines Roless',
   props<{newRoles:Roles}>()
);
export const SaveNewRolesActionsError = createAction (
'[SAVE_RAUME_ERROR] erfolglose Anmeldung eines Roless',
   props<{payload:string}>()
);

export const UpdateRolesActions= createAction(
'  UPDATE_RAUME_ACTION',
 props<{ roles: Roles }>()
);

export const UpdateRolesActionsSuccess = createAction(
  'UPDATE_RAUME_SUCCESS',
  props<{ roles: Update<Roles> }>()
);


export const DeleteRolesActions = createAction(
  'DELETE_RAUME_ACTION',
  props<{ codeRole: string }>()
);
export const DeleteRolesActionsSuccess = createAction(
  'DELETE_RAUME_SUCCESS',
  props<{ codeRole: string }>()
);
