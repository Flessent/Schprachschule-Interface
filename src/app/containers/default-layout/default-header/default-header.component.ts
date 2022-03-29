import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Store} from '@ngrx/store';
import {logoutAction} from '../../../ngrx/login/login.actions';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {AppState} from '../../../Appstore/app.state';
import {Personne} from '../../../model/personne';
import {Observable} from 'rxjs';
import {getVerbundenePerson} from '../../../ngrx/login/login.selector';
import {getRoles} from '../../../ngrx/roles/roles.selector';
import {Roles}  from '../../../model/roles';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {
     personne ! : Personne;
  @Input() sidebarId: string = "sidebar";
listeRoles! : Roles[];
  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private store : Store<AppState>) {
   super();
 this.store.select(getVerbundenePerson).subscribe((person: any) => {
 this.personne = person;
  //console.log('Infos roles dans header'+this.personne.roles[0]);

 });

  }

  logout(): void {
  this.store.dispatch(logoutAction());
  }
}
