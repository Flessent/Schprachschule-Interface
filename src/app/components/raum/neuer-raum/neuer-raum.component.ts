import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, AbstractControl,FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../Appstore/app.state';
import { SaveNewRaumActions} from "../../../ngrx/raum/raume.actions";
import {Raum} from '../../../model/raum';
@Component({
  selector: 'app-neuer-raum',
  templateUrl: './neuer-raum.component.html',
  styleUrls: ['./neuer-raum.component.scss']
})
export class NeuerRaumComponent implements OnInit {
neuerRaumForm ! : FormGroup;
  constructor(private formBuilder : FormBuilder, private store : Store<AppState>) { }
submitted : boolean = false;
  ngOnInit(): void {

  this.neuerRaumForm = this.formBuilder.group({
  nomRaume : new FormControl('', [Validators.required, Validators.minLength(4)]),
    standort : new FormControl('', [Validators.required, Validators.minLength(5)]),
  nbrePlaces : new FormControl(0, [Validators.required, Validators.minLength(2)])
  })

  }
get form(): { [key: string]: AbstractControl } {
return this.neuerRaumForm.controls;
}

onSaveRaum(){
if(!this.neuerRaumForm.valid) {

console.log("ich bin invalid");
 return;
 } else{
 const nomRaume= this.neuerRaumForm.value.nomRaume;
 const nbrePlaces=this.neuerRaumForm.value.nbrePlaces;
 const standort=this.neuerRaumForm.value.standort;
 const raum = new Raum(nomRaume,nbrePlaces,standort);
 this.store.dispatch(SaveNewRaumActions ( {newRaum :raum}) );
console.log('je ne suis pas invalid')
 }
}






}
