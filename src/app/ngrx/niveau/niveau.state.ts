import {EntityState,createEntityAdapter,EntityAdapter} from '@ngrx/entity';
import {Niveau} from "../../model/niveau";
export interface NiveauState extends EntityState<Niveau>{

count: number;
}
export const niveausAdapter : EntityAdapter<Niveau>= createEntityAdapter<Niveau>({

selectId : (niveau:Niveau)=> niveau.codeNiveau,
sortComparer : false

});

export const initState: NiveauState = niveausAdapter.getInitialState({ // Initializierung der State-Sprache durch getInitialState

  count:0,
  });


