import {Sekretaer} from "../../model/sekretaer";
import {SaveNewSekretaerActions,SaveNewSekretaerActionsSuccess,SaveNewSekretaerActionsError, DeleteSekretaerActionsSuccess,
UpdateSekretaerActionsSuccess,GetAllSekretaerActionsSuccess} from "./sekretaer.actions";

import {createReducer,on} from "@ngrx/store";
import {SekretaerState,initState} from "./sekretaer.state";
import {sekretaerAdapter} from './sekretaer.state';
/*
export const sprachenReducer= createReducer(
initState.sprachen,
on(GetAllSprachenActionsSuccess, (state, {payload})=> [...payload]    ) // payload est envoye ici par l'action, c'est le parametre de l'action
);
*/

 const  _sekretaerReducer= createReducer(
initState,
 on(SaveNewSekretaerActionsSuccess, (state, action) => {
    return sekretaerAdapter.addOne(action.newSekretaer, {
      ...state,
      count: state.count + 1,
    });
  }),
   on(GetAllSekretaerActionsSuccess, (state, action) => {
        return sekretaerAdapter.setAll(action.listSekretaer, {
          ...state,
          count: state.count + 1,
        });
      }),

 on(DeleteSekretaerActionsSuccess, (state, { usernameSekretaer }) => {
       return sekretaerAdapter.removeOne(usernameSekretaer, state);
     }),
     on(UpdateSekretaerActionsSuccess, (state, action) => {
           return sekretaerAdapter.updateOne(action.sekretaer, state); //updateOne aktualisiert eine Entität in der Sammlung
         })



);

export function sekretaerReducer(state:any, action:any) {
  return _sekretaerReducer(state, action);
}
