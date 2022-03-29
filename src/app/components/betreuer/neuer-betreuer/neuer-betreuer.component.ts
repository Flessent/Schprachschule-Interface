import { Component, OnInit,HostListener } from '@angular/core';
import {Store} from "@ngrx/store";
import { getNiveaus} from "../../../ngrx/niveau/niveau.selector";
import {Niveau} from "../../../model/niveau";
import {Sprache} from "../../../model/sprache";
import {MatFormFieldModule} from '@angular/material/form-field';
import { getSprachen} from "../../../ngrx/sprache/sprachen.selector";
import {SpracheService} from "../../../services/sprache/sprache.service";
import {BetreuerState} from "../../../ngrx/betreuer/betreuer.state";
import {Betreuer} from "../../../model/betreuer";
import {AppState} from '../../../Appstore/app.state';
import {Observable} from 'rxjs';
import {FormBuilder,FormGroup,Validators, AbstractControl,FormControl} from '@angular/forms';
import { SaveNewBetreuerActions} from "../../../ngrx/betreuer/betreuer.actions";
import { Personne} from "../../../model/personne";
import {getRoles} from "../../../ngrx/roles/roles.selector";
import {Roles} from "../../../model/roles";

@Component({
  selector: 'app-neuer-betreuer',
  templateUrl: './neuer-betreuer.component.html',
  styleUrls: ['./neuer-betreuer.component.scss']
})
export class NeuerBetreuerComponent implements OnInit {
neuerBetreuerForm! : FormGroup;
submitted : boolean = false;
niveaus: Observable<Niveau[]> | null = null;
listSprachen: Sprache[] = [];
listeNiveaus : Niveau[] = [];
niveausByLibelleSprache : Observable<Niveau[]> | null = null;
sprachen !: Observable<Sprache[]> ;
 gemeinsameInfosPerson ! : Personne;
 validation: string = '';
 constructor(private formBuilder: FormBuilder,private store: Store<AppState>,private spracheService : SpracheService) { }
onSp(libelleSprache : string){
this.niveausByLibelleSprache =this.spracheService.getAllNiveauByLibelleSprache(libelleSprache);
 }
 ngOnInit(): void {
  this.sprachen = this.store.select(getSprachen);
  this.niveaus=this.store.select(getNiveaus);
  this.niveausByLibelleSprache=this.niveaus;
        this.neuerBetreuerForm = this.formBuilder.group({

          //[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}

                  sprache:new FormControl([], [Validators.required]),
                  niveau:new FormControl([], [Validators.required]),
          salaire :new FormControl(0, [Validators.required,Validators.minLength(6)]),
          nbreMoisExperiences: new FormControl(0, [Validators.required])



  });

  }
@HostListener('document: mousemove', ['$event'])
getAllGemeinsameInfosPersonne(personne :Personne){
this.gemeinsameInfosPerson = personne;

//console.log('ich bin auch hier in Lehrer'+personne.nom);
}

@HostListener('window: mousemove', ['$event'])
getValidationGemeinsameInfosPersonne(validate :string){
this.validation=validate;
//console.log('validation auch hier'+this.validation);

if(!this.neuerBetreuerForm.valid && this.validation==='false' || this.neuerBetreuerForm.valid&&this.validation==='false' ||!this.neuerBetreuerForm.valid&&this.validation==='true')
{
this.submitted=false;
}
if(this.neuerBetreuerForm.valid&& this.validation==='true'){this.submitted=true;}
}

get form(): { [key: string]: AbstractControl } {
return this.neuerBetreuerForm.controls;
}



 listeNivea: Niveau[] = [];


 onSaveBetreuer() {
 if(this.neuerBetreuerForm.valid && this.validation==='false') {
 this.submitted=false;
 console.log('Ich bin invalid submitted'+this.submitted);

 return;
 } else{
//debugger;
this.submitted=true;

 const username=this.gemeinsameInfosPerson.username;
 const nom=this.gemeinsameInfosPerson.nom;
 const prenom=this.gemeinsameInfosPerson.prenom;
 const dateNaissance=this.gemeinsameInfosPerson.dateNaissance;
  const nationalite=this.gemeinsameInfosPerson.nationalite;
const activiteEnParalelle= this.gemeinsameInfosPerson.activiteEnParalelle;
 const profession=this.gemeinsameInfosPerson.profession;
 const quartier=this.gemeinsameInfosPerson.quartier;
 const numTel=this.gemeinsameInfosPerson.numTel;
 const email=this.gemeinsameInfosPerson.email;
 const numCni=this.gemeinsameInfosPerson.numCni;
 const password=this.gemeinsameInfosPerson.password;
 const diplomeEleve=this.gemeinsameInfosPerson.diplomeEleve;
 const dateDebutActiviteOuCours=this.gemeinsameInfosPerson.dateDebutActiviteOuCours;
   const roles=this.gemeinsameInfosPerson.roles;

 const isActived=this.gemeinsameInfosPerson.accountActivated;
 const sprache=this.neuerBetreuerForm.value.sprache;
 const niveau=this.neuerBetreuerForm.value.niveau;
 const salaire=this.neuerBetreuerForm.value.salaire;
 const nbreMoisExperiences=this.neuerBetreuerForm.value.nbreMoisExperiences;
 let listeNiv : string[]=[];
const dateInscription : Date= new Date();
this.store.select(getNiveaus).subscribe(nivs =>
  {this.listeNivea = nivs;});
  let niveaus: Niveau[] = [];
  niveaus = this.listeNivea.filter(niv => this.neuerBetreuerForm?.value.niveau.includes(niv.libelle));
 niveaus.forEach(niv =>listeNiv.push(niv.codeNiveau) );
 console.log('voici la liste des niveaux'+listeNiv)
 let listeSpr : string[]=[];

this.store.select(getSprachen).subscribe(sprachen =>
  {this.listSprachen = sprachen;});
  let sprs: Sprache[] = [];
  sprs = this.listSprachen.filter(sprache => this.neuerBetreuerForm?.value.sprache.includes(sprache.libelle));
 sprs.forEach(spr =>listeSpr.push(spr.codeSprache) );
 let listUUIDRolle :string[] = [];
let rols : Roles [];
this.store.select(getRoles).subscribe( roles => {
rols=roles.filter(role => this.gemeinsameInfosPerson.roles.includes(role.role) )
rols.forEach(rolle => listUUIDRolle.push(rolle.codeRole)   )

});


// this.neuerBetreuerForm.value.isActived=this.kontoAktivieren;
const isActivedVal = this.neuerBetreuerForm.value.isActived;
console.log('Kontosaktivierung'+isActivedVal)
const betreuer = new Betreuer(username,nom,prenom,dateNaissance,nationalite,profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,
activiteEnParalelle,isActivedVal,dateInscription,listeSpr,listeNiv,nbreMoisExperiences,salaire ,listUUIDRolle);
 this.store.dispatch(SaveNewBetreuerActions ( {newBetreuer :betreuer}) );
 }
  }

}
