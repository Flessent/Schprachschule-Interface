import { Component, OnInit } from '@angular/core';
import {AppState} from "../../../Appstore/app.state";
import {getLehrer} from '../../../ngrx/lehrer/lehrer.selector';
import {Observable} from 'rxjs';
import {Lehrer} from "../../../model/lehrer";
import {GetAllLehrerActions} from "../../../ngrx/lehrer/lehrer.actions";
import {Store} from "@ngrx/store";
@Component({
  selector: 'app-list-lehrer',
  templateUrl: './list-lehrer.component.html',
  styleUrls: ['./list-lehrer.component.scss']
})
export class ListLehrerComponent implements OnInit {
 constructor(private store : Store<AppState>) { }

    lehrer: Observable<Lehrer[]> | null = null;
      ngOnInit(): void {
      this.lehrer = this.store.select(getLehrer);// recupere l'etat du selecteur getSprachen dans le store
        this.store.dispatch(GetAllLehrerActions());
//this.betreuer.subscribe(betreuer => {console.log(betreuer)  })

      }
}
