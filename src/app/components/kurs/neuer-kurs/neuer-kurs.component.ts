import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {formatDate} from '@angular/common';
import {FormGroup,FormBuilder,FormControl,AbstractControl,Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {Kurs} from "../../../model/kurs";
import {Sprache} from "../../../model/sprache";
import {Raum} from "../../../model/raum";
import {Niveau} from "../../../model/niveau";
import {AppState} from '../../../Appstore/app.state';
import { SaveNewKursActions} from "../../../ngrx/kurs/kurs.actions";
import { GetAllSprachenActions,GetAllSprachenActionsSuccess,GetOneSpracheActions} from "../../../ngrx/sprache/sprachen.actions";
import { getSprachen} from "../../../ngrx/sprache/sprachen.selector";
import { getRaume} from "../../../ngrx/raum/raume.selector";
import { getNiveaus} from "../../../ngrx/niveau/niveau.selector";
import { v1 as uuid } from 'uuid';
import {Observable} from 'rxjs';
import {SpracheService} from "../../../services/sprache/sprache.service";
@Component({
  selector: 'app-neuer-kurs',
  templateUrl: './neuer-kurs.component.html',
  styleUrls: ['./neuer-kurs.component.scss']
})
export class NeuerKursComponent implements OnInit {
sprachen !: Observable<Sprache[]> ;
raume: Observable<Raum[]> | null = null;
niveaus: Observable<Niveau[]> | null = null;
listeNiveauOneSprache: string[] = [];
       tabOneSprache! : Sprache;

count: Observable<number> | null = null;
listSprachen: Sprache[] = [];
 neuerKursForm !: FormGroup;
sprache !:  Sprache ;
   constructor(private formBuilder: FormBuilder, private store : Store<AppState>, private spracheService : SpracheService) { }
 listKurse : Kurs[]=[];
  initRaum : Raum[]=[];
  initNiveau : Niveau[] = [];
listeRaume: Raum[] = [];
listeNiveaus : Niveau[] = [];
listeCodeGewahlteNiveau : string[]=[];
 initSprache!  : Sprache;
   ngOnInit(): void {
     this.sprachen = this.store.select(getSprachen);
this.raume=this.store.select(getRaume);
this.niveaus=this.store.select(getNiveaus);
this.niveausByLibelleSprache=this.niveaus;
      this.neuerKursForm = this.formBuilder.group({
      langue: [ this.initSprache, Validators.required],
      raum: [ this.initRaum, Validators.required],
      niveau: [ [], Validators.required],

   professeur : new FormControl('', [Validators.required, Validators.minLength(10)] ),
     auProgramme : new FormControl('', [Validators.required, Validators.minLength(5)] ),
     heureDebut : new FormControl(new Date()),
       heureFin : new FormControl(new Date()),
   })
   }
niveausByLibelleSprache : Observable<Niveau[]> | null = null;
   submitted:boolean=false;

 get form(): { [key: string]: AbstractControl } {
     return this.neuerKursForm.controls;
   }

 onSp(libelleSprache : string){
this.niveausByLibelleSprache =this.spracheService.getAllNiveauByLibelleSprache(libelleSprache);
 }
 listeNivea: Niveau[] = [];
 onSaveKurs(){
 if(!this.neuerKursForm) {

 console.log("ich bin invalid");
  return;
  } else{

  const professeur=this.neuerKursForm.value.professeur;
    const auProgramme=this.neuerKursForm.value.auProgramme;
  const heureDebut= this.neuerKursForm.value.heureDebut;
  const heureFin= this.neuerKursForm.value.heureFin;
  const raum = this.neuerKursForm.value.raum;
const nives = this.neuerKursForm.value.niveau;

let oneSprache: Sprache;
 this.store.select(getSprachen).subscribe(sprachen =>
    {this.listSprachen = sprachen;});
    //debugger;
oneSprache =this.listSprachen.find(sprache => this.neuerKursForm?.value.langue.includes(sprache.libelle))!;


  this.store.select(getRaume).subscribe(raums =>
    {this.listeRaume = raums;});
       const listRaume = this.listeRaume.filter(raum => this.neuerKursForm?.value.raum.includes(raum.nom_raume));
      let  listRaums : string[] = [];
           listRaume.forEach(raum => listRaums.push(raum.codeRaum));
const niveau = this.listeNiveauOneSprache;
 let listeNiv : string[]=[];

this.store.select(getNiveaus).subscribe(nivs =>
  {this.listeNivea = nivs;});
  let niveaus: Niveau[] = [];
  niveaus = this.listeNivea.filter(niv => this.neuerKursForm?.value.niveau.includes(niv.libelle));
 niveaus.forEach(niv =>listeNiv.push(niv.codeNiveau) );




//let ohneWiederholteWerte = Array.from(new Set(niveau));


 const kurs = new Kurs(listeNiv,listRaums,oneSprache.codeSprache,auProgramme,heureDebut,heureFin, professeur);

 this.store.dispatch(SaveNewKursActions ( {newKurs :kurs}) );



  }
 }
}
