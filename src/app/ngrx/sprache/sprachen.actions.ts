import {Action, createAction,props} from "@ngrx/store";
import {Sprache} from "../../model/sprache";
import { Update } from '@ngrx/entity';



export const GetAllSprachenActions = createAction(
'[GET_ALL_SPRACHEN] Abholung der Sprachliste'
);

  export const GetAllSprachenActionsSuccess = createAction (

   '[GET_ALL_SPRACHEN_SUCCESS] erfolgreiche Abholung der Sprachliste',
   props<{listSprache:Sprache[]}>()
  );
export const GetAllSprachenActionsError = createAction (
'[GET_ALL_SPRACHEN_ERROR] erfolglose Abholung der Sprachliste',
props<{payload:string}>()

);
//Get All Sprachen By codeSprache
export const GetAllSprachenByCodeSprachenActions = createAction(
'[GET_ALL_SPRACHEN] Abholung der Sprachliste',
props<{listCodeSprache:string[]}>()
);

  export const GetAllSprachenByCodeSprachenActionsSuccess = createAction (

   '[GET_ALL_SPRACHEN_SUCCESS] erfolgreiche Abholung der Sprachliste',
   props<{listSprache:Sprache[]}>()
  );
export const GetAllSprachenByCodeSprachenActionsError = createAction (
'[GET_ALL_SPRACHEN_ERROR] erfolglose Abholung der Sprachliste',
props<{payload:string}>()

);

//Get One Sprache by codeSprache
export const GetOneSpracheActions = createAction(
'[GET_ONE_SPRACHE] Abholung der Sprachliste',
   props<{ codeSprache: string}>()

);

  export const GetOneSpracheActionsSuccess = createAction (

   '[GET_ONE_SPRACHE_SUCCESS] erfolgreiche Abholung der Sprachliste',
   props<{sprache:Sprache}>()
  );
export const GetOneSpracheActionsError = createAction (
'[GET_ONE_SPRACHE_ERROR] erfolglose Abholung der Sprachliste',
props<{payload:string}>()

);











// New Sprache
export const NewSpracheActions = createAction (
'[NEW_SPRACHE] Anzeige des Hinzufügenformular ',
  // props<{payload:any}>()

);
export const NewSpracheActionsSuccess = createAction (
'[NEW_SPRACHE_SUCCESS] erfolgreiche Anzeige des Sprachanmeldungsformular ',

   //props<{payload:any}>()
);
export const NewSpracheActionsError = createAction (
'[NEW_SPRACHE_ERROR] erfolglose Anzeige des Sprachanmeldungsformular ',
  props<{payload:string}>()
);
// Save new Sprache
export const SaveNewSpracheActions = createAction (
'[SAVE_SPRACHE] Anmeldung einer Sprache',
   props<{newSprache:Sprache}>()

);
export const SaveNewSpracheActionsSuccess =createAction(
'[SAVE_SPRACHE_SUCCESS] erfolgreiche Anmeldung einer Sprache',
   props<{newSprache:Sprache}>()
);
export const SaveNewSpracheActionsError = createAction (
'[SAVE_SPRACHE_ERROR] erfolglose Anmeldung einer Sprache',
   props<{payload:string}>()
);

export const UpdateSpracheActions= createAction(
'  UPDATE_SPRACHE_ACTION',
 props<{ sprache: Sprache }>()
);

export const UpdateSpracheActionsSuccess = createAction(
  'UPDATE_SPRACHE_SUCCESS',
  props<{ sprache: Update<Sprache> }>()
);


export const DeleteSpracheActions = createAction(
  'DELETE_SPRACHE_ACTION',
  props<{ codeSprache: string }>()
);
export const DeleteSpracheActionsSuccess = createAction(
  'DELETE_SPRACHE_SUCCESS',
  props<{ codeSprache: string }>()
);







