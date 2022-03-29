import { Component, OnInit,HostListener } from '@angular/core';
import {StudentenState} from "../../../ngrx/student/student.state";
import {Student} from "../../../model/student";
import {Personne} from "../../../model/personne";
import {AppState} from '../../../Appstore/app.state';
import {Observable} from 'rxjs';
import {FormBuilder,FormGroup,Validators, AbstractControl,FormControl, NgControl} from '@angular/forms';
import { SaveNewStudentActions} from "../../../ngrx/student/student.actions";
import {Store} from "@ngrx/store";
import { getNiveaus} from "../../../ngrx/niveau/niveau.selector";
import {Niveau} from "../../../model/niveau";
import {Sprache} from "../../../model/sprache";
import {MatFormFieldModule} from '@angular/material/form-field';
import { getSprachen} from "../../../ngrx/sprache/sprachen.selector";
import {SpracheService} from "../../../services/sprache/sprache.service";
import {Roles} from "../../../model/roles";
import {getRoles} from "../../../ngrx/roles/roles.selector";


@Component({
  selector: 'app-neuer-student',
  templateUrl: './neuer-student.component.html',
  styleUrls: ['./neuer-student.component.scss']
})
export class NeuerStudentComponent implements OnInit {
 gemeinsameInfosPerson ! : Personne;
 validation: string = '';
neuerStudentForm! : FormGroup;
submitted : boolean = false;
niveaus: Observable<Niveau[]> | null = null;
listSprachen: Sprache[] = [];
listeNiveaus : Niveau[] = [];
niveausByLibelleSprache : Observable<Niveau[]> | null = null;
sprachen !: Observable<Sprache[]> ;

  constructor(private formBuilder: FormBuilder,private store: Store<AppState>,private spracheService : SpracheService) { }
onSp(libelleSprache : string){
this.niveausByLibelleSprache =this.spracheService.getAllNiveauByLibelleSprache(libelleSprache);
 }


  ngOnInit(): void {
 // console.log(this.zeitraum);
     this.sprachen = this.store.select(getSprachen);
this.niveaus=this.store.select(getNiveaus);
this.niveausByLibelleSprache=this.niveaus;
      this.neuerStudentForm = this.formBuilder.group({

        sprache:new FormControl([], [Validators.required]),
        niveau:new FormControl([], [Validators.required]),
                numTelFinanceurCours:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        numTelMereOuTutrice:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        numTelPereOuTuteur:  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        nomFinanceurCours:new FormControl("", [Validators.required,Validators.minLength(6)]),
        nomPereOuTuteur:new FormControl("", [Validators.required,Validators.minLength(6)]),
        nomMereOuTutrice:new FormControl(" ", [Validators.required,Validators.minLength(6)]),


      });
  }

@HostListener('document: mousemove', ['$event'])
getAllGemeinsameInfosPersonne(personne :Personne){
this.gemeinsameInfosPerson = personne;

console.log('ich bin auch hier in Student '+this.gemeinsameInfosPerson.nom);
}

@HostListener('window: mousemove', ['$event'])
getValidationGemeinsameInfosPersonne(validate :string){
this.validation=validate;
//console.log('validation auch hier'+this.validation);

if(!this.neuerStudentForm.valid && this.validation==='false' || this.neuerStudentForm.valid&&this.validation==='false' ||!this.neuerStudentForm.valid&&this.validation==='true')
{
this.submitted=false;
}
if(this.neuerStudentForm.valid&& this.validation==='true'){this.submitted=true;}
}





 // zeitraum = this.neuerStudentForm.value.dateDebutActiviteOuCours.getTime() - this.neuerStudentForm.value.dateNaissance.getTime();
get form(): { [key: string]: AbstractControl } {
return this.neuerStudentForm.controls;
}

 listeNivea: Niveau[] = [];


 onSaveStudent() {
 if(this.neuerStudentForm.valid && this.validation==='false') {
 this.submitted=false; console.log('Ich bin invalid');
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
  const accountActivated=this.gemeinsameInfosPerson.accountActivated;
    const roles=this.gemeinsameInfosPerson.roles;

console.log('nom et prenom'+nom, prenom);
 const numTelFinanceurCours=this.neuerStudentForm.value.numTelFinanceurCours;
 const numTelMereOuTutrice=this.neuerStudentForm.value.numTelMereOuTutrice;
 const numTelPereOuTuteur=this.neuerStudentForm.value.numTelPereOuTuteur;
 const nomFinanceurCours=this.neuerStudentForm.value.nomFinanceurCours;
 const nomPereOuTuteur=this.neuerStudentForm.value.nomPereOuTuteur;
 const nomMereOuTutrice=this.neuerStudentForm.value.nomMereOuTutrice;

 const sprache=this.neuerStudentForm.value.sprache;
 const niveau=this.neuerStudentForm.value.niveau;
 let listeNiv : string[]=[];
const dateInscription : Date= new Date();
this.store.select(getNiveaus).subscribe(nivs =>
  {this.listeNivea = nivs;});
  let niveaus: Niveau[] = [];
  niveaus = this.listeNivea.filter(niv => this.neuerStudentForm.value.niveau.includes(niv.libelle));
 niveaus.forEach(niv =>listeNiv.push(niv.codeNiveau) );
 console.log('voici la liste des niveaux'+listeNiv);
 let listeSpr : string[]=[];
this.store.select(getSprachen).subscribe(sprachen =>
  {this.listSprachen = sprachen;});
  let sprs: Sprache[] = [];
  sprs = this.listSprachen.filter(sprache => this.neuerStudentForm.value.sprache.includes(sprache.libelle));
 sprs.forEach(spr =>listeSpr.push(spr.codeSprache) );
 let listUUIDRolle :string[] = [];
let rols : Roles [];
this.store.select(getRoles).subscribe( roles => {
rols=roles.filter(role => this.gemeinsameInfosPerson.roles.includes(role.role) )
rols.forEach(rolle => listUUIDRolle.push(rolle.codeRole)   )

});


const  student : Student = new Student(username,nom,prenom,dateNaissance,nationalite,profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,
activiteEnParalelle,accountActivated,dateInscription,numTelFinanceurCours,numTelMereOuTutrice,
numTelPereOuTuteur,nomFinanceurCours,nomPereOuTuteur,nomMereOuTutrice,listeSpr,listeNiv,listUUIDRolle );
 this.store.dispatch(SaveNewStudentActions ( {newStudent :student}) );
 }
  }




}
