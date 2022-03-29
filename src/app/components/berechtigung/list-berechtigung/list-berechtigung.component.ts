import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllRolesActions} from "../../../ngrx/roles/roles.actions";
import {Roles} from "../../../model/roles";
import {AppState} from "../../../Appstore/app.state";
import {getRoles} from '../../../ngrx/roles/roles.selector';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-list-berechtigung',
  templateUrl: './list-berechtigung.component.html',
  styleUrls: ['./list-berechtigung.component.scss']
})
export class ListBerechtigungComponent implements OnInit {
roles: Observable<Roles[]> | null = null;
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
   this.roles = this.store.select(getRoles);// recupere l'etat du selecteur getSprachen dans le store si les parametres sont les memes(Memorization)
 this.store.dispatch(GetAllRolesActions(  ));// recupere la liste vers le backend si les parametres ont changes

  }
}
