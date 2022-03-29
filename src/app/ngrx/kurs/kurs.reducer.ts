import {createReducer,on} from '@ngrx/store';
import {SaveNewKursActions,SaveNewKursActionsSuccess,GetAllKurseActions,GetAllKurseActionsSuccess,
DeleteKursActions,DeleteKursActionsSuccess,UpdateKursActions,UpdateKursActionsSuccess
} from './kurs.actions';
import {kurseAdapter} from './kurs.state';
import {KursState,initState} from "./kurs.state";

export const _kurseReducer= createReducer(
initState,
  on(GetAllKurseActionsSuccess, (state, action) => {
     return kurseAdapter.setAll(action.listKurse, {// Die aktuelle Sammlung wird  durch die bereitgestellte Sammlung ersetzt.Man kann das als ein Update sehen
       ...state,
       count: state.count + 1,
     });
   }),

 on(SaveNewKursActionsSuccess, (state, action) => {
    return kurseAdapter.addOne(action.newKurs, {
      ...state,
      count: state.count + 1,
    });
  }),
      on(DeleteKursActionsSuccess, (state, { codeKurs }) => {
         return kurseAdapter.removeOne(codeKurs, state);
       }),
 on(UpdateKursActionsSuccess, (state, action) => {
      return kurseAdapter.updateOne(action.kurs, state); //updateOne aktualisiert eine Entität in der Sammlung
    }),

);


export function kurseReducer(state:any, action:any) {
  return _kurseReducer(state, action);
}
