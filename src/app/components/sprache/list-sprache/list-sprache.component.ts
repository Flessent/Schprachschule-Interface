import { Component, OnInit , Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllSprachenActions,GetAllSprachenActionsSuccess} from "../../../ngrx/sprache/sprachen.actions";
import {Sprache} from "../../../model/sprache";
import {AppState} from "../../../Appstore/app.state";
import {getSprachen} from '../../../ngrx/sprache/sprachen.selector';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-list-sprache',
  templateUrl: './list-sprache.component.html',
  styleUrls: ['./list-sprache.component.scss']
})
export class ListSpracheComponent implements OnInit {
  constructor(private store : Store<AppState>) { }

sprachen: Observable<Sprache[]> | null = null;
  ngOnInit(): void {
 this.sprachen = this.store.select(getSprachen);// recupere l'etat du selecteur getSprachen dans le store
    this.store.dispatch(GetAllSprachenActions());
  }



}
