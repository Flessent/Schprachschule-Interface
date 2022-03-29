import {EntityState,createEntityAdapter,EntityAdapter} from '@ngrx/entity';
import {Raum} from "../../model/raum";
export interface RaumeState extends EntityState<Raum>{

listRaume: Raum[];
}
export const raumeAdapter : EntityAdapter<Raum>= createEntityAdapter<Raum>({

selectId : (raum:Raum)=> raum.codeRaum,
sortComparer : false

});

export const initState: RaumeState = raumeAdapter.getInitialState({ // Initializierung der State-Sprache durch getInitialState

  listRaume:[],
  });



