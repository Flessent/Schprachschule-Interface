import { Component, OnInit ,Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl,FormArray} from '@angular/forms';
import {Store} from "@ngrx/store";
import {GetAllSprachenActions, SaveNewSpracheActions,NewSpracheActions} from "../../../ngrx/sprache/sprachen.actions";
import {GetAllNiveausActions} from "../../../ngrx/niveau/niveau.actions";
import {SprachenState} from "../../../ngrx/sprache/sprachen.state";
import {Sprache} from "../../../model/sprache";
import {AppState} from '../../../Appstore/app.state';
import {Niveau} from '../../../model/niveau';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-neue-sprache',
  templateUrl: './neue-sprache.component.html',
  styleUrls: ['./neue-sprache.component.scss']
})
export class NeueSpracheComponent  implements OnInit {
count: Observable<number> | null = null;
niveauList: Niveau[] = [];


  constructor(private formBuilder: FormBuilder,private store: Store<AppState>) { }
state: SprachenState| null=null;
inititListNiveau : Niveau[]= [];
spracheFormGroup? : FormGroup;
niveauFormGroup? : FormGroup;
  submitted:boolean=false;
valeur:string='Ja';

ngOnInit() {
    // recupere l'etat du selecteur getSprachen dans le store
         // this.count = this.store.select(getCount); // gleiche Arbeit


      this.spracheFormGroup = this.formBuilder.group({
        libelle:new FormControl("", [Validators.required,Validators.minLength(6)]),
//niveau : this.formBuilder.array(this.inititListNiveau, Validators.required)

      });

}




 onSaveSprache() {
 if(!this.spracheFormGroup) {
 return;
 } else{
 const libelle= this.spracheFormGroup.value.libelle;
 this.spracheFormGroup.value.intensive=this.intensivKurs;
 const intensive= this.spracheFormGroup.value.intensive;

 const sprache = new Sprache(libelle,intensive);
 this.store.dispatch(SaveNewSpracheActions ( {newSprache :sprache}) );
 }
  }



intensivKurs : boolean = true;
//this.valeur='Ja';
Titel1 : String ='Fügt eine neue Sprache hinzu ! ';
onIntensiv(){
if(this.intensivKurs && this.valeur=='Ja'){
this.valeur='Nein';
this.intensivKurs=false;

} else if(! this.intensivKurs && this.valeur=='Nein'){
this.intensivKurs=true;
this.valeur='Ja';}

}


}
