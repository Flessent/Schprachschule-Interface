import { Component, OnInit,Input,HostListener } from '@angular/core';
import {Store} from "@ngrx/store";
import {MatFormFieldModule} from '@angular/material/form-field';
import {SekretaerState} from "../../../ngrx/sekretaer/sekretaer.state";
import {Sekretaer} from "../../../model/sekretaer";
import {AppState} from '../../../Appstore/app.state';
import {Observable} from 'rxjs';
import {FormBuilder,FormGroup,Validators, AbstractControl,FormControl} from '@angular/forms';
import { SaveNewSekretaerActions} from "../../../ngrx/sekretaer/sekretaer.actions";
import { Personne} from "../../../model/personne";
import {Roles} from "../../../model/roles";
import {getRoles} from "../../../ngrx/roles/roles.selector";

@Component({
  selector: 'app-neuer-sekretaer',
  templateUrl: './neuer-sekretaer.component.html',
  styleUrls: ['./neuer-sekretaer.component.scss']
})
export class NeuerSekretaerComponent implements OnInit {

 neuerSekretaerForm! : FormGroup;
 submitted : boolean = false;
  gemeinsameInfosPerson ! : Personne;
  validation: string = '';
  constructor(private formBuilder: FormBuilder,private store: Store<AppState>) { }

  ngOnInit(): void {
         this.neuerSekretaerForm = this.formBuilder.group({

           //[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}

                   languesSekretaer:new FormControl([], [Validators.required]),
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

 if(!this.neuerSekretaerForm.valid && this.validation==='false' || this.neuerSekretaerForm.valid&&this.validation==='false'
 ||!this.neuerSekretaerForm.valid&&this.validation==='true')
 {
 this.submitted=false;
 }
 if(this.neuerSekretaerForm.valid&& this.validation==='true'){this.submitted=true;}
 }

 get form(): { [key: string]: AbstractControl } {
 return this.neuerSekretaerForm.controls;
 }





  onSaveSekretaer() {
  if(this.neuerSekretaerForm.valid && this.validation==='false') {
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
  const accountActivated=this.gemeinsameInfosPerson.accountActivated;
  const languesSekretaer=this.neuerSekretaerForm.value.languesSekretaer;
  const salaire=this.neuerSekretaerForm.value.salaire;
  const nbreMoisExperiences=this.neuerSekretaerForm.value.nbreMoisExperiences;
 const dateInscription : Date= new Date();
   const roles=this.gemeinsameInfosPerson.roles;

 let listUUIDRolle :string[] = [];
let rols : Roles [];
this.store.select(getRoles).subscribe( roles => {
rols=roles.filter(role => this.gemeinsameInfosPerson.roles.includes(role.role) )
rols.forEach(rolle => listUUIDRolle.push(rolle.codeRole)   )

});


 // this.neuerLehrerForm.value.isActived=this.kontoAktivieren;
 //const isActivedVal = this.neuerSekretaerForm.value.isActived;
 console.log('Kontosaktivierung'+accountActivated)
 const sekretaer = new Sekretaer(username,nom,prenom,dateNaissance,nationalite,profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,
 activiteEnParalelle,accountActivated,dateInscription,languesSekretaer,nbreMoisExperiences,salaire,listUUIDRolle );
  this.store.dispatch(SaveNewSekretaerActions ( {newSekretaer :sekretaer}) );
  }
   }


}
