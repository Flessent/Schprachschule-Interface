import {Action, createAction,props} from "@ngrx/store";
import {Betreuer} from "../../model/betreuer";
import { Update } from '@ngrx/entity';



export const GetAllBetreuerActions = createAction(
'[GET_ALL_BETREUER] Abholung der Liste von Betreuern'
);

  export const GetAllBetreuerActionsSuccess = createAction (

   '[GET_ALL_BETREUER_SUCCESS] erfolgreiche Abholung der Liste von Betreuern',
   props<{listBetreuer:Betreuer[]}>()
  );
export const GetAllBetreuerActionsError = createAction (
'[GET_ALL_BETREUER_ERROR] erfolglose Abholung der Liste von Betreuern',
props<{payload:string}>()

);
//Get All Betreuer By codeBetreuer
export const GetAllBetreuerByUsernameActions = createAction(
'[GET_ALL_BETREUER] Abholung der Liste von Betreuern',
props<{listUsername:string[]}>()
);

  export const GetAllBetreuerByUsernameActionsSuccess = createAction (

   '[GET_ALL_BETREUER_SUCCESS] erfolgreiche Abholung der Liste von Betreuern',
   props<{listBetreuer:Betreuer[]}>()
  );
export const GetAllBetreuerByUseranmeActionsError = createAction (
'[GET_ALL_BETREUER_ERROR] erfolglose Abholung der Liste von Betreuern',
props<{payload:string}>()

);

//Get One Betreuer by codeBetreuer
export const GetOneBetreuerActions = createAction(
'[GET_ONE_BETREUER] Abholung der Liste von Betreuern',
   props<{ usernameBetreuer:string}>()

);

  export const GetOneBetreuerActionsSuccess = createAction (

   '[GET_ONE_BETREUER_SUCCESS] erfolgreiche Abholung der Liste von Betreuern',
   props<{betreuer:Betreuer}>()
  );
export const GetOneBetreuerActionsError = createAction (
'[GET_ONE_BETREUER_ERROR] erfolglose Abholung der Liste von Betreuern',
props<{payload:string}>()

);


// New Betreuer
export const NewBetreuerActions = createAction (
'[NEW_BETREUER] Anzeige des Hinzufügenformular ',
  // props<{payload:any}>()

);
export const NewBetreuerActionsSuccess = createAction (
'[NEW_BETREUER_SUCCESS] erfolgreiche Anzeige des Sprachanmeldungsformular ',

   //props<{payload:any}>()
);
export const NewBetreuerActionsError = createAction (
'[NEW_BETREUER_ERROR] erfolglose Anzeige des Sprachanmeldungsformular ',
  props<{payload:string}>()
);
// Save new Betreuer
export const SaveNewBetreuerActions = createAction (
'[SAVE_BETREUER] Anmeldung einer Betreuer',
   props<{newBetreuer:Betreuer}>()

);
export const SaveNewBetreuerActionsSuccess =createAction(
'[SAVE_BETREUER_SUCCESS] erfolgreiche Anmeldung einer Betreuer',
   props<{newBetreuer:Betreuer}>()
);
export const SaveNewBetreuerActionsError = createAction (
'[SAVE_BETREUER_ERROR] erfolglose Anmeldung einer Betreuer',
   props<{payload:string}>()
);
export const UpdateBetreuerActions= createAction(
'  UPDATE_BETREUER_ACTION',
 props<{ betreuer: Betreuer }>()
);

export const UpdateBetreuerActionsSuccess = createAction(
  'UPDATE_BETREUER_SUCCESS',
  props<{ betreuer: Update<Betreuer> }>()
);


export const DeleteBetreuerActions = createAction(
  'DELETE_BETREUER_ACTION',
  props<{ usernameBetreuer: string }>()
);
export const DeleteBetreuerActionsSuccess = createAction(
  'DELETE_BETREUER_SUCCESS',
  props<{ usernameBetreuer: string }>()
);







