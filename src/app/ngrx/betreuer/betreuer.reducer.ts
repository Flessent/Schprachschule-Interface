import {Betreuer} from "../../model/betreuer";
import {SaveNewBetreuerActions,SaveNewBetreuerActionsSuccess,SaveNewBetreuerActionsError, DeleteBetreuerActionsSuccess,
UpdateBetreuerActionsSuccess,GetAllBetreuerActionsSuccess} from "./betreuer.actions";

import {createReducer,on} from "@ngrx/store";
import {BetreuerState,initState} from "./betreuer.state";
import {betreuerAdapter} from './betreuer.state';
/*
export const sprachenReducer= createReducer(
initState.sprachen,
on(GetAllSprachenActionsSuccess, (state, {payload})=> [...payload]    ) // payload est envoye ici par l'action, c'est le parametre de l'action
);
*/

 const  _betreuerReducer= createReducer(
initState,
 on(SaveNewBetreuerActionsSuccess, (state, action) => {
    return betreuerAdapter.addOne(action.newBetreuer, {
      ...state,
      count: state.count + 1,
    });
  }),
   on(GetAllBetreuerActionsSuccess, (state, action) => {
        return betreuerAdapter.setAll(action.listBetreuer, {
          ...state,
          count: state.count + 1,
        });
      }),

 on(DeleteBetreuerActionsSuccess, (state, { usernameBetreuer }) => {
       return betreuerAdapter.removeOne(usernameBetreuer, state);
     }),
     on(UpdateBetreuerActionsSuccess, (state, action) => {
           return betreuerAdapter.updateOne(action.betreuer, state); //updateOne aktualisiert eine Entität in der Sammlung
         })



);

export function betreuerReducer(state:any, action:any) {
  return _betreuerReducer(state, action);
}
