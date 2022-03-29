import { Component, OnInit , Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllRaumeActions,GetAllRaumeActionsSuccess} from "../../../ngrx/raum/raume.actions";
import {RaumeState} from "../../../ngrx/raum/raume.state";
import {Raum} from "../../../model/raum";
import {AppState} from "../../../Appstore/app.state";
import {getRaume} from '../../../ngrx/raum/raume.selector';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-raum',
  templateUrl: './list-raum.component.html',
  styleUrls: ['./list-raum.component.scss']
})
export class ListRaumComponent implements OnInit {
raume: Observable<Raum[]> | null = null;
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
   this.raume = this.store.select(getRaume);// recupere l'etat du selecteur getSprachen dans le store si les parametres sont les memes(Memorization)
 this.store.dispatch(GetAllRaumeActions(  ));// recupere la liste vers le backend si les parametres ont changes

  }


}
