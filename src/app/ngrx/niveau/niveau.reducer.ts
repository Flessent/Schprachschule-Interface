import {createReducer,on} from '@ngrx/store';
import {GetAllNiveausActionsSuccess,SaveNewNiveauActionsSuccess,DeleteNiveauActionsSuccess,UpdateNiveauActionsSuccess} from './niveau.actions';
import {niveausAdapter} from './niveau.state';
import {NiveauState,initState} from "./niveau.state";

export const _niveausReducer= createReducer(
initState,
  on(GetAllNiveausActionsSuccess, (state, action) => {
     return niveausAdapter.setAll(action.listNiveaus, {// Die aktuelle Sammlung wird  durch die bereitgestellte Sammlung ersetzt.Man kann das als ein Update sehen
       ...state,
     });
   }),

 on(SaveNewNiveauActionsSuccess, (state, action) => {
    return niveausAdapter.addOne(action.newNiveau, {
      ...state,
    });
  }),
      on(DeleteNiveauActionsSuccess, (state, { codeNiveau }) => {
         return niveausAdapter.removeOne(codeNiveau, state);
       }),
 on(UpdateNiveauActionsSuccess, (state, action) => {
      return niveausAdapter.updateOne(action.niveau, state); //updateOne aktualisiert eine Entität in der Sammlung
    }),

);


export function niveausReducer(state:any, action:any) {
  return _niveausReducer(state, action);
}
