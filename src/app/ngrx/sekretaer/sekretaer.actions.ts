import {Action, createAction,props} from "@ngrx/store";
import {Sekretaer} from "../../model/sekretaer";
import { Update } from '@ngrx/entity';



export const GetAllSekretaerActions = createAction(
'[GET_ALL_SEKRETAER] Abholung der Liste von Sekretaern'
);

  export const GetAllSekretaerActionsSuccess = createAction (

   '[GET_ALL_SEKRETAER_SUCCESS] erfolgreiche Abholung der Liste von Sekretaern',
   props<{listSekretaer:Sekretaer[]}>()
  );
export const GetAllSekretaerActionsError = createAction (
'[GET_ALL_SEKRETAER_ERROR] erfolglose Abholung der Liste von Sekretaern',
props<{payload:string}>()

);
//Get All Sekretaer By codeSekretaer
export const GetAllSekretaerByUsernameActions = createAction(
'[GET_ALL_SEKRETAER] Abholung der Liste von Sekretaern',
props<{listUsername:string[]}>()
);

  export const GetAllSekretaerByUsernameActionsSuccess = createAction (

   '[GET_ALL_SEKRETAER_SUCCESS] erfolgreiche Abholung der Liste von Sekretaern',
   props<{listSekretaer:Sekretaer[]}>()
  );
export const GetAllSekretaerByUseranmeActionsError = createAction (
'[GET_ALL_SEKRETAER_ERROR] erfolglose Abholung der Liste von Sekretaern',
props<{payload:string}>()

);

//Get One Sekretaer by codeSekretaer
export const GetOneSekretaerActions = createAction(
'[GET_ONE_SEKRETAER] Abholung der Liste von Sekretaern',
   props<{ usernameSekretaer:string}>()

);

  export const GetOneSekretaerActionsSuccess = createAction (

   '[GET_ONE_SEKRETAER_SUCCESS] erfolgreiche Abholung der Liste von Sekretaern',
   props<{sekretaer:Sekretaer}>()
  );
export const GetOneSekretaerActionsError = createAction (
'[GET_ONE_SEKRETAER_ERROR] erfolglose Abholung der Liste von Sekretaern',
props<{payload:string}>()

);


// New Sekretaer
export const NewSekretaerActions = createAction (
'[NEW_SEKRETAER] Anzeige des Hinzufügenformular ',
  // props<{payload:any}>()

);
export const NewSekretaerActionsSuccess = createAction (
'[NEW_SEKRETAER_SUCCESS] erfolgreiche Anzeige des Sprachanmeldungsformular ',

   //props<{payload:any}>()
);
export const NewSekretaerActionsError = createAction (
'[NEW_SEKRETAER_ERROR] erfolglose Anzeige des Sprachanmeldungsformular ',
  props<{payload:string}>()
);
// Save new Sekretaer
export const SaveNewSekretaerActions = createAction (
'[SAVE_SEKRETAER] Anmeldung einer Sekretaer',
   props<{newSekretaer:Sekretaer}>()

);
export const SaveNewSekretaerActionsSuccess =createAction(
'[SAVE_SEKRETAER_SUCCESS] erfolgreiche Anmeldung einer Sekretaer',
   props<{newSekretaer:Sekretaer}>()
);
export const SaveNewSekretaerActionsError = createAction (
'[SAVE_SEKRETAER_ERROR] erfolglose Anmeldung einer Sekretaer',
   props<{payload:string}>()
);
export const UpdateSekretaerActions= createAction(
'  UPDATE_SEKRETAER_ACTION',
 props<{ sekretaer: Sekretaer }>()
);

export const UpdateSekretaerActionsSuccess = createAction(
  'UPDATE_SEKRETAER_SUCCESS',
  props<{ sekretaer: Update<Sekretaer> }>()
);


export const DeleteSekretaerActions = createAction(
  'DELETE_SEKRETAER_ACTION',
  props<{ usernameSekretaer: string }>()
);
export const DeleteSekretaerActionsSuccess = createAction(
  'DELETE_SEKRETAER_SUCCESS',
  props<{ usernameSekretaer: string }>()
);
