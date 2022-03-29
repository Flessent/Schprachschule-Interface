import { Component, OnInit ,Input} from '@angular/core';
import {Roles} from "../../../../model/roles";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../Appstore/app.state";
import {DeleteRolesActions} from "../../../../ngrx/roles/roles.actions";
import {GetAllRolesActions} from "../../../../ngrx/roles/roles.actions";
@Component({
  selector: 'app-item-berechtigung',
  templateUrl: './item-berechtigung.component.html',
  styleUrls: ['./item-berechtigung.component.scss']
})
export class ItemBerechtigungComponent implements OnInit {
@Input() roles! : Roles;//de liste Roles
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
  console.log(this.roles.role)
  }
  onDeleteRoles(codeRole: string) {
     if (confirm('Sind Sie sicher diese Daten  löchen zu wollen ? Es gibt kein Zurück mehr !')) {
     console.log('voici le codeRaume concerne'+codeRole);
       this.store.dispatch(DeleteRolesActions({ codeRole }));
     }
}
}
