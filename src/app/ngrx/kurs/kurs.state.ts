import {EntityState,createEntityAdapter,EntityAdapter} from '@ngrx/entity';
import {Kurs} from "../../model/kurs";
export interface KursState extends EntityState<Kurs>{

count: number;
}
export const kurseAdapter : EntityAdapter<Kurs>= createEntityAdapter<Kurs>({

selectId : (kurs:Kurs)=> kurs.codeKurs,
sortComparer : false

});

export const initState: KursState = kurseAdapter.getInitialState({ // Initializierung der State-Sprache durch getInitialState

  count:0,
  });

export function sortByLangue(a: Kurs, b: Kurs): number {

  const compare = a.au_programme.localeCompare(b.au_programme);
  if (compare >0) {
    return -1;
  }

  if (compare < 0) {
    return 1;
  }

  return compare;
}


