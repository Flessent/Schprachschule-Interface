import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllKurseActions} from "../../../ngrx/kurs/kurs.actions";
import {KursState} from "../../../ngrx/kurs/kurs.state";
import {Kurs} from "../../../model/kurs";
import {AppState} from "../../../Appstore/app.state";
import {getKurse, getCount} from '../../../ngrx/kurs/kurs.selector';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-list-kurs',
  templateUrl: './list-kurs.component.html',
  styleUrls: ['./list-kurs.component.scss']
})
export class ListKursComponent implements OnInit {

kurse: Observable<Kurs[]> | null = null;

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
  this.kurse = this.store.select(getKurse);// recupere l'etat du selecteur getSprachen dans le store
      this.store.dispatch(GetAllKurseActions());
  }
}
