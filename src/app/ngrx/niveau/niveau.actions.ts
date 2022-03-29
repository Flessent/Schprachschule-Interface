import {Niveau} from "../../model/niveau";
import {props,createAction} from '@ngrx/store';
import {Update} from '@ngrx/entity';
export const GetAllNiveausActions=createAction(
' Abholung der Liste von Niveaus'
);

export const GetAllNiveausActionsSuccess=createAction(
   '[GET_ALL_NIVEAUS_SUCCESS] erfolgreiche Abholung der Niveauliste',

props< {listNiveaus: Niveau[]} >()
);

// Hinzufügen eines neuen Niveau
export const SaveNewNiveauActions = createAction (
'[SAVE_NIVEAU] Hinzufügen eines Niveaus',
   props<{newNiveau:Niveau}>()

);
export const SaveNewNiveauActionsSuccess =createAction(
'[SAVE_NIVEAU_SUCCESS] erfolgreiche Anmeldung eines Niveaus',
   props<{newNiveau:Niveau}>()
);
export const SaveNewNiveauActionsError = createAction (
'[SAVE_NIVEAU_ERROR] erfolglose Anmeldung eines Niveaus',
   props<{payload:string}>()
);

export const UpdateNiveauActions= createAction(
'  UPDATE_NIVEAU_ACTION',
 props<{ niveau: Niveau }>()
);

export const UpdateNiveauActionsSuccess = createAction(
  'UPDATE_NIVEAU_SUCCESS',
  props<{ niveau: Update<Niveau> }>()
);


export const DeleteNiveauActions = createAction(
  'DELETE_NIVEAU_ACTION',
  props<{ codeNiveau: string }>()
);
export const DeleteNiveauActionsSuccess = createAction(
  'DELETE_NIVEAU_SUCCESS',
  props<{ codeNiveau: string }>()
);
