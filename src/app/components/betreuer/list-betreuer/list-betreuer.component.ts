import { Component, OnInit } from '@angular/core';
import {AppState} from "../../../Appstore/app.state";
import {getBetreuer} from '../../../ngrx/betreuer/betreuer.selector';
import {Observable} from 'rxjs';
import {Betreuer} from "../../../model/betreuer";
import {GetAllBetreuerActions} from "../../../ngrx/betreuer/betreuer.actions";
import {Store} from "@ngrx/store";
@Component({
  selector: 'app-list-betreuer',
  templateUrl: './list-betreuer.component.html',
  styleUrls: ['./list-betreuer.component.scss']
})
export class ListBetreuerComponent implements OnInit {

   constructor(private store : Store<AppState>) { }

    betreuer: Observable<Betreuer[]> | null = null;
      ngOnInit(): void {
      this.betreuer = this.store.select(getBetreuer);// recupere l'etat du selecteur getSprachen dans le store
        this.store.dispatch(GetAllBetreuerActions());
//this.betreuer.subscribe(betreuer => {console.log(betreuer)  })

      }

}
