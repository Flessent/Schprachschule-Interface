import {Sekretaer} from "../../model/sekretaer";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface SekretaerState extends EntityState<Sekretaer>{

  count :number,

}

export const sekretaerAdapter: EntityAdapter<Sekretaer> = createEntityAdapter<Sekretaer>({
  selectId: (sekretaer:Sekretaer)=> sekretaer.username,
  sortComparer: false // sortComparer est une Property de createEntityAdapter pour le trie de la collection de data avant l'affichage
});

export const initState: SekretaerState = sekretaerAdapter.getInitialState({ // Initializierung der State-Sprache durch getInitialState

  count:0,
  });






