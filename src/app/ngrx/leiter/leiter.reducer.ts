import {Sprache} from "../../model/sprache";
import {GetAllSprachenActions,GetAllSprachenActionsSuccess,SaveNewSpracheActionsSuccess,
UpdateSpracheActionsSuccess,DeleteSpracheActionsSuccess,GetAllSprachenByCodeSprachenActionsSuccess

} from "./sprachen.actions";
import {createReducer,on} from "@ngrx/store";
import {SprachenState,initState} from "./sprachen.state";
import {sprachenAdapter} from './sprachen.state';
/*
export const sprachenReducer= createReducer(
initState.sprachen,
on(GetAllSprachenActionsSuccess, (state, {payload})=> [...payload]    ) // payload est envoye ici par l'action, c'est le parametre de l'action
);
*/

 const  _sprachenReducer= createReducer(
initState,
 on(SaveNewSpracheActionsSuccess, (state, action) => {
    return sprachenAdapter.addOne(action.newSprache, {
      ...state,
      count: state.count + 1,
    });
  }),

   on(GetAllSprachenByCodeSprachenActionsSuccess, (state, action) => {
      return sprachenAdapter.setAll(action.listSprache, {
        ...state,
        count: state.count + 1,
      });
    }),


   on(UpdateSpracheActionsSuccess, (state, action) => {
      return sprachenAdapter.updateOne(action.sprache, state); //updateOne aktualisiert eine Entität in der Sammlung
    }),
  on(GetAllSprachenActionsSuccess, (state, action) => {
     return sprachenAdapter.setAll(action.listSprache, {// Die aktuelle Sammlung wird  durch die bereitgestellte Sammlung ersetzt.Man kann das als ein Update sehen
       ...state,
       count: state.count + 1,
     });
   }),

    on(DeleteSpracheActionsSuccess, (state, { codeSprache }) => {
       return sprachenAdapter.removeOne(codeSprache, state);
     })




);

export function sprachenReducer(state:any, action:any) {
  return _sprachenReducer(state, action);
}
