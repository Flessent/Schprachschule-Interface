import {Action, createAction,props} from "@ngrx/store";
import {Student} from "../../model/student";
import { Update } from '@ngrx/entity';



export const GetAllStudentenActions = createAction(
'[GET_ALL_STUDENTEN] Abholung der Liste von Studenten'
);

  export const GetAllStudentenActionsSuccess = createAction (

   '[GET_ALL_STUDENTEN_SUCCESS] erfolgreiche Abholung der Liste von Studenten',
   props<{listStudent:Student[]}>()
  );
export const GetAllStudentenActionsError = createAction (
'[GET_ALL_STUDENTEN_ERROR] erfolglose Abholung der Liste von Studenten',
props<{payload:string}>()

);
//Get All Sprachen By codeSprache
export const GetAllStudentenByUsernameActions = createAction(
'[GET_ALL_STUDENTEN] Abholung der Liste von Studenten',
props<{listUsernameStudent:string[]}>()
);

  export const GetAllStudentenByUsernameActionsSuccess = createAction (

   '[GET_ALL_STUDENTEN_SUCCESS] erfolgreiche Abholung der Liste von Studenten',
   props<{listStudenten:Student[]}>()
  );
export const GetAllStudentenByUsernameActionsError = createAction (
'[GET_ALL_STUDENTEN_ERROR] erfolglose Abholung der Liste von Studenten',
props<{payload:string}>()

);

//Get One Sprache by codeSprache
export const GetOneStudentActions = createAction(
'[GET_ONE_STUDENT] Abholung der Liste von Studenten',
   props<{ username: string}>()

);

  export const GetOneStudentActionsSuccess = createAction (

   '[GET_ONE_SPRACHE_SUCCESS] erfolgreiche Abholung der Sprachliste',
   props<{student:Student}>()
  );
export const GetOneStudentActionsError = createAction (
'[GET_ONE_SPRACHE_ERROR] erfolglose Abholung der Sprachliste',
props<{payload:string}>()

);


// New Sprache
export const NewStudentActions = createAction (
'[NEW_STUDENT] Anzeige des Hinzufügenformular ',
  // props<{payload:any}>()

);
export const NewStudentActionsSuccess = createAction (
'[NEW_STUDENT_SUCCESS] erfolgreiche Anzeige des Sprachanmeldungsformular ',

   //props<{payload:any}>()
);
export const NewStudentActionsError = createAction (
'[NEW_STUDENT_ERROR] erfolglose Anzeige des Sprachanmeldungsformular ',
  props<{payload:string}>()
);
// Save new Sprache
export const SaveNewStudentActions = createAction (
'[SAVE_STUDENT] Anmeldung einer Sprache',
   props<{newStudent:Student}>()

);
export const SaveNewStudentActionsSuccess =createAction(
'[SAVE_STUDENT_SUCCESS] erfolgreiche Anmeldung einer Sprache',
   props<{newStudent:Student}>()
);
export const SaveNewStudentActionsError = createAction (
'[SAVE_STUDENT_ERROR] erfolglose Anmeldung einer Sprache',
   props<{payload:string}>()
);

export const UpdateStudentActions= createAction(
'  UPDATE_STUDENT_ACTION',
 props<{ student: Student }>()
);

export const UpdateStudentActionsSuccess = createAction(
  'UPDATE_STUDENT_SUCCESS',
  props<{ student: Update<Student> }>()
);


export const DeleteStudentActions = createAction(
  'DELETE_STUDENT_ACTION',
  props<{ username: string }>()
);
export const DeleteStudentActionsSuccess = createAction(
  'DELETE_STUDENT_SUCCESS',
  props<{ username: string }>()
);







