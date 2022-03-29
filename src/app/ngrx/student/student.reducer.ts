import {Student} from "../../model/student";
import {SaveNewStudentActions,SaveNewStudentActionsSuccess,SaveNewStudentActionsError,
GetAllStudentenActions,GetAllStudentenActionsSuccess,GetAllStudentenActionsError,GetAllStudentenByUsernameActions,GetAllStudentenByUsernameActionsSuccess,
GetAllStudentenByUsernameActionsError,GetOneStudentActions,GetOneStudentActionsSuccess,GetOneStudentActionsError,UpdateStudentActions,UpdateStudentActionsSuccess,
DeleteStudentActions,DeleteStudentActionsSuccess

} from "./student.actions";
import {createReducer,on} from "@ngrx/store";
import {StudentenState,initState} from "./student.state";
import {studentenAdapter} from './student.state';

 const  _studentenReducer= createReducer(
initState,
 on(SaveNewStudentActionsSuccess, (state, action) => {
    return studentenAdapter.addOne(action.newStudent, {
      ...state,
      listeStudent: state.listeStudent,
    });
  }),




   on(UpdateStudentActionsSuccess, (state, action) => {
      return studentenAdapter.updateOne(action.student, state); //updateOne aktualisiert eine Entität in der Sammlung
    }),
  on(GetAllStudentenActionsSuccess, (state, action) => {
     return studentenAdapter.setAll(action.listStudent, {// Die aktuelle Sammlung wird  durch die bereitgestellte Sammlung ersetzt.Man kann das als ein Update sehen
       ...state,
       listeStudent: state.listeStudent
     });
   }),

    on(DeleteStudentActionsSuccess, (state, { username }) => {
       return studentenAdapter.removeOne(username, state);
     })




);

export function studentenReducer(state:any, action:any) {
  return _studentenReducer(state, action);
}
