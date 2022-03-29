import {Lehrer} from "../../model/lehrer";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface LehrerState extends EntityState<Lehrer>{

  count :number,

}

export const lehrerAdapter: EntityAdapter<Lehrer> = createEntityAdapter<Lehrer>({
  selectId: (lehrer:Lehrer)=> lehrer.username,
  sortComparer: false // sortComparer est une Property de createEntityAdapter pour le trie de la collection de data avant l'affichage
});

export const initState: LehrerState = lehrerAdapter.getInitialState({ // Initializierung der State-Sprache durch getInitialState

  count:0,
  });






