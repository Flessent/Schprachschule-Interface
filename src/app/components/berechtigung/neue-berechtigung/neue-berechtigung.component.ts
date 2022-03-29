import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, AbstractControl,FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../Appstore/app.state';
import { SaveNewRolesActions} from "../../../ngrx/roles/roles.actions";
import {Roles} from '../../../model/roles';
@Component({
  selector: 'app-neue-berechtigung',
  templateUrl: './neue-berechtigung.component.html',
  styleUrls: ['./neue-berechtigung.component.scss']
})
export class NeueBerechtigungComponent implements OnInit {

neueBerechtigungForm ! : FormGroup;
  constructor(private formBuilder : FormBuilder, private store : Store<AppState>) { }
submitted : boolean = false;
  ngOnInit(): void {

  this.neueBerechtigungForm = this.formBuilder.group({
  berechtigung : new FormControl('', [Validators.required, Validators.minLength(4)]),
    beschreibung : new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  }
get form(): { [key: string]: AbstractControl } {
return this.neueBerechtigungForm.controls;
}

onSaveBerechtigung(){
if(!this.neueBerechtigungForm.valid) {

console.log("ich bin invalid");
 return;
 } else{
 const berechtigung= this.neueBerechtigungForm.value.berechtigung;
 const beschreibung=this.neueBerechtigungForm.value.beschreibung;
 const roles = new Roles(berechtigung,beschreibung);
 this.store.dispatch(SaveNewRolesActions ( {newRoles :roles}) );
console.log('je ne suis pas invalid')
 }
}


}
