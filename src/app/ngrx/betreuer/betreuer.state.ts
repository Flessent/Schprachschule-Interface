import {Betreuer} from "../../model/betreuer";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface BetreuerState extends EntityState<Betreuer>{
  /*sprachen:Sprache[],
  errorMessage:string,
dataState:SprachenStateEnum,
  currentSprache:Sprache | null,*/
  count :number,

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
export const betreuerAdapter: EntityAdapter<Betreuer> = createEntityAdapter<Betreuer>({
  selectId: (betreuer:Betreuer)=> betreuer.username,
  sortComparer: false // sortComparer est une Property de createEntityAdapter pour le trie de la collection de data avant l'affichage
});




export const initState: BetreuerState = betreuerAdapter.getInitialState({ // Initializierung der State-Sprache durch getInitialState

  count:0,
  });






