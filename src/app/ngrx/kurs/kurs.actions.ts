import {Kurs} from "../../model/kurs";
import {props,createAction} from '@ngrx/store';
import {Update} from '@ngrx/entity';
export const GetAllKurseActions=createAction(
' Abholung der Liste von Kursen'
);

export const GetAllKurseActionsSuccess=createAction(
   '[GET_ALL_KURSE_SUCCESS] erfolgreiche Abholung der Liste von Kursen',

props< {listKurse: Kurs[]} >()
);

// Hinzufügen eines neuen Niveau
export const SaveNewKursActions = createAction (
'[SAVE_KURS] Hinzufügen neues Kurses',
   props<{newKurs:Kurs}>()

);
export const SaveNewKursActionsSuccess =createAction(
'[SAVE_KURS_SUCCESS] erfolgreiche Anmeldung eines Kurses',
   props<{newKurs:Kurs}>()
);
export const SaveNewKursActionsError = createAction (
'[SAVE_KURS_ERROR] erfolglose Anmeldung eines Kurses',
   props<{payload:string}>()
);

export const UpdateKursActions= createAction(
'  UPDATE_KURS_ACTION',
 props<{ kurs: Kurs }>()
);

export const UpdateKursActionsSuccess = createAction(
  'UPDATE_KURS_SUCCESS',
  props<{ kurs: Update<Kurs> }>()
);


export const DeleteKursActions = createAction(
  'DELETE_KURS_ACTION',
  props<{ codeKurs: string }>()
);
export const DeleteKursActionsSuccess = createAction(
  'DELETE_KURS_SUCCESS',
  props<{ codeKurs: string }>()
);
