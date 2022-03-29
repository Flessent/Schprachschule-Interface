import {Action, createAction,props} from "@ngrx/store";
import {Lehrer} from "../../model/lehrer";
import { Update } from '@ngrx/entity';



export const GetAllLehrerActions = createAction(
'[GET_ALL_LEHRER] Abholung der Liste von Lehrern'
);

  export const GetAllLehrerActionsSuccess = createAction (

   '[GET_ALL_LEHRER_SUCCESS] erfolgreiche Abholung der Liste von Lehrern',
   props<{listLehrer:Lehrer[]}>()
  );
export const GetAllLehrerActionsError = createAction (
'[GET_ALL_LEHRER_ERROR] erfolglose Abholung der Liste von Lehrern',
props<{payload:string}>()

);
//Get All Lehrer By codeLehrer
export const GetAllLehrerByUsernameActions = createAction(
'[GET_ALL_LEHRER] Abholung der Liste von Lehrern',
props<{listUsername:string[]}>()
);

  export const GetAllLehrerByUsernameActionsSuccess = createAction (

   '[GET_ALL_LEHRER_SUCCESS] erfolgreiche Abholung der Liste von Lehrern',
   props<{listLehrer:Lehrer[]}>()
  );
export const GetAllLehrerByUseranmeActionsError = createAction (
'[GET_ALL_LEHRER_ERROR] erfolglose Abholung der Liste von Lehrern',
props<{payload:string}>()

);

//Get One Lehrer by codeLehrer
export const GetOneLehrerActions = createAction(
'[GET_ONE_LEHRER] Abholung der Liste von Lehrern',
   props<{ usernameLehrer:string}>()

);

  export const GetOneLehrerActionsSuccess = createAction (

   '[GET_ONE_LEHRER_SUCCESS] erfolgreiche Abholung der Liste von Lehrern',
   props<{lehrer:Lehrer}>()
  );
export const GetOneLehrerActionsError = createAction (
'[GET_ONE_LEHRER_ERROR] erfolglose Abholung der Liste von Lehrern',
props<{payload:string}>()

);


// New Lehrer
export const NewLehrerActions = createAction (
'[NEW_LEHRER] Anzeige des Hinzufügenformular ',
  // props<{payload:any}>()

);
export const NewLehrerActionsSuccess = createAction (
'[NEW_LEHRER_SUCCESS] erfolgreiche Anzeige des Sprachanmeldungsformular ',

   //props<{payload:any}>()
);
export const NewLehrerActionsError = createAction (
'[NEW_LEHRER_ERROR] erfolglose Anzeige des Sprachanmeldungsformular ',
  props<{payload:string}>()
);
// Save new Lehrer
export const SaveNewLehrerActions = createAction (
'[SAVE_LEHRER] Anmeldung einer Lehrer',
   props<{newLehrer:Lehrer}>()

);
export const SaveNewLehrerActionsSuccess =createAction(
'[SAVE_LEHRER_SUCCESS] erfolgreiche Anmeldung einer Lehrer',
   props<{newLehrer:Lehrer}>()
);
export const SaveNewLehrerActionsError = createAction (
'[SAVE_LEHRER_ERROR] erfolglose Anmeldung einer Lehrer',
   props<{payload:string}>()
);
export const UpdateLehrerActions= createAction(
'  UPDATE_LEHRER_ACTION',
 props<{ lehrer: Lehrer }>()
);

export const UpdateLehrerActionsSuccess = createAction(
  'UPDATE_LEHRER_SUCCESS',
  props<{ lehrer: Update<Lehrer> }>()
);


export const DeleteLehrerActions = createAction(
  'DELETE_LEHRER_ACTION',
  props<{ usernameLehrer: string }>()
);
export const DeleteLehrerActionsSuccess = createAction(
  'DELETE_LEHRER_SUCCESS',
  props<{ usernameLehrer: string }>()
);
