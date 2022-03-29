import {Sprache} from "../../model/sprache";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface SprachenState extends EntityState<Sprache>{
  /*sprachen:Sprache[],
  errorMessage:string,
dataState:SprachenStateEnum,
  currentSprache:Sprache | null,*/
  listSprachen :Sprache[],

}
/* createEntityAdapter kann uns bei vielen Dingen helfen:
- automatische Verwaltung einer Struktur von einer Entität durch ihr Id: Das is der Fall hier. Falls die Entität keine Id-Property hat, müssen wir eine Funktion
selecteId angeben, die die richtige ID auswählt : export const getMyId = createEntityAdapter<Sprache>({
selecteId : sprache => sprache.libelle }).
- Initialisierung der State :
export const initialState : State= adapter.getInitialState({ loading : true})
- Verabeitung der Entitäten :
createEntityAdapter verfügt über viele Methoden für die Verwaltung/Verabeitung der Entitäten :
addOne : fügt eine Entität hinzu; addAll : mehrer Entitäten hinzufügen;setOne, setMany, removeOne, removeMany, etc...
*/
export const sprachenAdapter: EntityAdapter<Sprache> = createEntityAdapter<Sprache>({
  selectId: (sprache:Sprache)=> sprache.codeSprache,
  sortComparer: false // sortComparer est une Property de createEntityAdapter pour le trie de la collection de data avant l'affichage
});




export const initState: SprachenState = sprachenAdapter.getInitialState({ // Initializierung der State-Sprache durch getInitialState
 /*sprachen:[],
  errorMessage:"",
  dataState:SprachenStateEnum.INITIAL,
  currentSprache : null,*/
listSprachen : []

  });

export function sortByName(a: Sprache, b: Sprache): number {

  const compare = a.libelle.localeCompare(b.libelle);
  if (compare >0) {
    return -1;
  }

  if (compare < 0) {
    return 1;
  }

  return compare;
}





