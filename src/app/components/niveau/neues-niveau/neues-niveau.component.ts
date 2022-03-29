import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {formatDate} from '@angular/common';
import {FormGroup,FormBuilder,FormControl,AbstractControl,Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Niveau} from "../../../model/niveau";
import {AppState} from '../../../Appstore/app.state';
import { SaveNewNiveauActions} from "../../../ngrx/niveau/niveau.actions";
import { GetAllSprachenActions} from "../../../ngrx/sprache/sprachen.actions";
import {ItemNiveauComponent} from '../list-niveau/item-niveau/item-niveau.component'
import {LibelleSprache} from '../list-niveau/getLibelleSprache'

import {Sprache} from '../../../model/sprache';
import {getSprachen} from '../../../ngrx/sprache/sprachen.selector';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-neues-niveau',
  templateUrl: './neues-niveau.component.html',
  styleUrls: ['./neues-niveau.component.scss']
})
export class NeuesNiveauComponent implements OnInit {
neuesNiveauForm !: FormGroup;
sprachen: Observable<Sprache[]> | null = null;
sprachList: Sprache[] = [];

  constructor(private formBuilder: FormBuilder, private store : Store<AppState>,private libelleSprache:LibelleSprache) { }
listSprachen : Sprache[]=[];
  ngOnInit(): void {
[...new Set(this.libelleSprache.getSpracheByCodeSprache() )];

    this.store.dispatch(GetAllSprachenActions());

    this.sprachen = this.store.select(getSprachen);


  this.neuesNiveauForm = this.formBuilder.group({
  libelle : new FormControl('', [Validators.required, Validators.minLength(2)] ),
    prix : new FormControl('', [Validators.required, Validators.minLength(5)] ),
    dateDebut : new FormControl(new Date()),
      dateFin : new FormControl(new Date()),
            sprache: [ [], Validators.required]

  })
  }



  submitted:boolean=false;
item! : ItemNiveauComponent;

get form(): { [key: string]: AbstractControl } {
    return this.neuesNiveauForm.controls;
  }

onSaveNiveau(){
if(!this.neuesNiveauForm) {

console.log("ich bin invalid");
 return;
 } else{
 const libelle= this.neuesNiveauForm.value.libelle;
 const prix=this.neuesNiveauForm.value.prix;
 const dateDebut= this.neuesNiveauForm.value.dateDebut;
 const dateFin= this.neuesNiveauForm.value.dateFin;

  this.store.select(getSprachen).subscribe(sprachs =>
   {this.sprachList = sprachs;});
  const sprache = this.sprachList.filter(sp => this.neuesNiveauForm?.value.sprache.includes(sp.libelle));
  //debugger;
  let listeSpr : string[]=[];
  sprache.forEach(spr =>listeSpr.push(spr.codeSprache) );
  // console.log('voici la liste des niveaux'+listeNiv)
 const niveau = new Niveau(libelle,prix,dateDebut,dateFin, listeSpr!);




 this.store.dispatch(SaveNewNiveauActions ( {newNiveau :niveau}) );
[...new Set(this.libelleSprache.getSpracheByCodeSprache() )];
console.log('je ne suis pas invalid')
 }
}
}
