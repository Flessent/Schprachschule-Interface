import {Lehrer} from "../../model/lehrer";
import {SaveNewLehrerActions,SaveNewLehrerActionsSuccess,SaveNewLehrerActionsError, DeleteLehrerActionsSuccess,
UpdateLehrerActionsSuccess,GetAllLehrerActionsSuccess} from "./lehrer.actions";

import {createReducer,on} from "@ngrx/store";
import {LehrerState,initState} from "./lehrer.state";
import {lehrerAdapter} from './lehrer.state';
/*
export const sprachenReducer= createReducer(
initState.sprachen,
on(GetAllSprachenActionsSuccess, (state, {payload})=> [...payload]    ) // payload est envoye ici par l'action, c'est le parametre de l'action
);
*/

 const  _lehrerReducer= createReducer(
initState,
 on(SaveNewLehrerActionsSuccess, (state, action) => {
    return lehrerAdapter.addOne(action.newLehrer, {
      ...state,
      count: state.count + 1,
    });
  }),
   on(GetAllLehrerActionsSuccess, (state, action) => {
        return lehrerAdapter.setAll(action.listLehrer, {
          ...state,
          count: state.count + 1,
        });
      }),

 on(DeleteLehrerActionsSuccess, (state, { usernameLehrer }) => {
       return lehrerAdapter.removeOne(usernameLehrer, state);
     }),
     on(UpdateLehrerActionsSuccess, (state, action) => {
           return lehrerAdapter.updateOne(action.lehrer, state); //updateOne aktualisiert eine Entität in der Sammlung
         })



);

export function lehrerReducer(state:any, action:any) {
  return _lehrerReducer(state, action);
}
