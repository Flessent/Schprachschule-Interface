import { Component, OnInit } from '@angular/core';
import {Personne} from "../../model/personne";
import {Store} from "@ngrx/store";
import {getVerbundenePerson} from "../../ngrx/login/login.selector";
import {AppState} from "../../Appstore/app.state";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
     personne ! : Personne;

  constructor(private store : Store<AppState>) {
   this.store.select(getVerbundenePerson).subscribe((person: any) => {
   this.personne = person;
   });
   console.log('infos roles user profile'+this.personne.roles);
  }

  ngOnInit(): void {
  }

}
