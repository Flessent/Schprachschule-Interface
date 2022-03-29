import { Component, OnInit } from '@angular/core';
import {AppState} from "../../../Appstore/app.state";
import {getSekretaer} from '../../../ngrx/sekretaer/sekretaer.selector';
import {Observable} from 'rxjs';
import {Sekretaer} from "../../../model/sekretaer";
import {GetAllSekretaerActions} from "../../../ngrx/sekretaer/sekretaer.actions";
import {Store} from "@ngrx/store";
@Component({
  selector: 'app-list-sekretaer',
  templateUrl: './list-sekretaer.component.html',
  styleUrls: ['./list-sekretaer.component.scss']
})
export class ListSekretaerComponent implements OnInit {

constructor(private store : Store<AppState>) { }

    sekretaer: Observable<Sekretaer[]> | null = null;
      ngOnInit(): void {
      this.sekretaer = this.store.select(getSekretaer);// recupere l'etat du selecteur getSprachen dans le store
        this.store.dispatch(GetAllSekretaerActions());

      }

}
