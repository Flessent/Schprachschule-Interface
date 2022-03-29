import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl,AbstractControl} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router,ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../../Appstore/app.state';
import {Raum} from '../../../model/raum';
import {UpdateRaumActions} from '../../../ngrx/raum/raume.actions';
import {getRaumByCodeRaum} from '../../../ngrx/raum/raume.selector';
@Component({
  selector: 'app-update-raum',
  templateUrl: './update-raum.component.html',
  styleUrls: ['./update-raum.component.scss']
})
export class UpdateRaumComponent implements OnInit {
updateRaumForm !: FormGroup;
raumSubcription !: Subscription;
raum! : Raum;
   submitted:boolean=false;

   constructor(private store: Store<AppState>, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder : FormBuilder) {}

  ngOnInit(): void {
   this.createForm();
   this.activatedRoute.paramMap.subscribe(params => {
   const codeRaum = params.get('codeRaum');
   this.raumSubcription=this.store.select(getRaumByCodeRaum, {codeRaum} ).subscribe(raum => {
if(raum){
this.raum=raum;
this.updateRaumForm.patchValue({
nomRaume: raum.nom_raume,
nbrePlaces : raum.nbre_places,
standort:raum.standort


})
}

   })
   });

   }
  createForm(){
  this.updateRaumForm=this.formBuilder.group({
  nomRaume : new FormControl('', [Validators.required, Validators.minLength(4)]),
  nbrePlaces : new FormControl(10, [Validators.required, Validators.minLength(2)]),
  standort : new FormControl('', [Validators.required, Validators.minLength(10)])
  })
  }

  onUpdateRaum(){
  if(!this.updateRaumForm.valid){
  return;
  }
  const nom_raume=this.updateRaumForm.value.nomRaume;
  const nbre_places=this.updateRaumForm.value.nbrePlaces;
  const standort=this.updateRaumForm.value.standort;
  const raum : Raum= {
  codeRaum: this.raum.codeRaum,
  nom_raume,
  nbre_places,
  standort

  }

this.store.dispatch(UpdateRaumActions({raum : raum}) );
this.router.navigate(['/willkommen/raum/liste-raume']);
  }
      get form(): { [key: string]: AbstractControl } {
       return this.updateRaumForm.controls;
}


}
