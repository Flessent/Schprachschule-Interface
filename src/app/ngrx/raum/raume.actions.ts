import {Raum} from "../../model/raum";
import {props,createAction} from '@ngrx/store';
import {Update} from '@ngrx/entity';
export const GetAllRaumeActions=createAction(
' Abholung der Liste von Raumen'
);

export const GetAllRaumeActionsSuccess=createAction(
   '[GET_ALL_RAUMES_SUCCESS] erfolgreiche Abholung der Raumliste',

props< {listRaume: Raum[]} >()
);

// Hinzufügen eines neuen Raum
export const SaveNewRaumActions = createAction (
'[SAVE_RAUME] Hinzufügen eines Raums',
   props<{newRaum:Raum}>()

);
export const SaveNewRaumActionsSuccess =createAction(
'[SAVE_RAUME_SUCCESS] erfolgreiche Anmeldung eines Raums',
   props<{newRaum:Raum}>()
);
export const SaveNewRaumActionsError = createAction (
'[SAVE_RAUME_ERROR] erfolglose Anmeldung eines Raums',
   props<{payload:string}>()
);

export const UpdateRaumActions= createAction(
'  UPDATE_RAUME_ACTION',
 props<{ raum: Raum }>()
);

export const UpdateRaumActionsSuccess = createAction(
  'UPDATE_RAUME_SUCCESS',
  props<{ raum: Update<Raum> }>()
);


export const DeleteRaumActions = createAction(
  'DELETE_RAUME_ACTION',
  props<{ codeRaum: string }>()
);
export const DeleteRaumActionsSuccess = createAction(
  'DELETE_RAUME_SUCCESS',
  props<{ codeRaum: string }>()
);
