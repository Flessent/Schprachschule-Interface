import {createReducer,on} from '@ngrx/store';
import {GetAllRaumeActionsSuccess,SaveNewRaumActionsSuccess,DeleteRaumActionsSuccess,UpdateRaumActionsSuccess} from './raume.actions';
import {raumeAdapter} from './raume.state';
import {RaumeState,initState} from "./raume.state";

export const _raumeReducer= createReducer(
initState,
  on(GetAllRaumeActionsSuccess, (state, action) => {
     return raumeAdapter.setAll(action.listRaume, {// Die aktuelle Sammlung wird  durch die bereitgestellte Sammlung ersetzt.Man kann das als ein Update sehen
       ...state,
       listRaume: action.listRaume
     });

   }),

 on(SaveNewRaumActionsSuccess, (state, action) => {
    return raumeAdapter.addOne(action.newRaum, {
      ...state,
     listRaume: [...state.listRaume],
    });
  }),
      on(DeleteRaumActionsSuccess, (state, { codeRaum }) => {
         return raumeAdapter.removeOne(codeRaum, state);
       }),
 on(UpdateRaumActionsSuccess, (state, action) => {
      return raumeAdapter.updateOne(action.raum, state); //updateOne aktualisiert eine Entität in der Sammlung
    }),

);


export function raumeReducer(state:any, action:any) {
  return _raumeReducer(state, action);
}
