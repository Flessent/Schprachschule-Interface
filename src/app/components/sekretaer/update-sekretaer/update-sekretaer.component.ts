import { Component, OnInit,HostListener,Output,EventEmitter } from '@angular/core';
import {FormBuilder,FormGroup,Validators, AbstractControl,FormControl} from '@angular/forms';
import {Store} from "@ngrx/store";
import {MatFormFieldModule} from '@angular/material/form-field';
import {SekretaerState} from "../../../ngrx/sekretaer/sekretaer.state";
import {Sekretaer} from "../../../model/sekretaer";
import {AppState} from '../../../Appstore/app.state';
import {Observable,Subscription} from 'rxjs';
import { Personne} from "../../../model/personne";
import {UpdateSekretaerActions} from '../../../ngrx/sekretaer/sekretaer.actions';
import {getSekretaerByUsername} from '../../../ngrx/sekretaer/sekretaer.selector';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-update-sekretaer',
  templateUrl: './update-sekretaer.component.html',
  styleUrls: ['./update-sekretaer.component.scss']
})
export class UpdateSekretaerComponent implements OnInit {

updateSekretaerForm! : FormGroup;
sekretaerSubscription! : Subscription;
kontoAk : boolean=false;
 personne ! : Personne;
submitted : boolean = false;

 gemeinsameInfosPerson ! : Personne;
 validation: string = '';
 sekretaer !: Sekretaer;
  updateteGemeinsameInfosPerson ! : Personne;

  constructor(private formBuilder : FormBuilder,private activatedRoute: ActivatedRoute,
  private store: Store<AppState>, private router: Router) { }

 ngOnInit(): void {
 this.createForm();//Erstellung eines leeren Formular
   this.activatedRoute.paramMap.subscribe(params => {
 const username=params.get('username');
    this.sekretaerSubscription=  this.store.select(getSekretaerByUsername, {username}).subscribe((sekretaer )  => {

        if (sekretaer) {
          this.sekretaer = sekretaer;
          this.sendGemeinsameInfosPerson();
          this.updateSekretaerForm.patchValue({//patchValue aktualisiert nur Eigenschaften, die das Formularmodell definiert.

                       salaire:sekretaer.salaire,
                       nbreMoisExperiences:sekretaer.nbreMoisExperiences,
                       languesSekretaer : sekretaer.languesSekretaer


          });
          this.kontoAk=sekretaer.accountActivated;// recuperation du intensive du sprache ä update
         console.log('valeur du backend de isActived'+this.kontoAk);
        }

      });
 });
 //console.log('abgeholter Student'+this.betreuer.nom);

   }

createForm() {
this.updateSekretaerForm =this.formBuilder.group({
languesSekretaer : new FormControl([], [Validators.required]),
salaire : new FormControl([], [Validators.required, Validators.minLength(5)]),
nbreMoisExperiences : new FormControl([], [Validators.required])

})}

//@HostListener('window: mousemove', ['$event'])
sendGemeinsameInfosPerson(){
 if(this.sekretaer){
 const username="Nicht Erlaubt";
  const nom=this.sekretaer.nom;
  const prenom=this.sekretaer.prenom;
  const dateNaissance=new Date(this.sekretaer.dateNaissance);
   const nationalite=this.sekretaer.nationalite;
 const activiteEnParalelle= this.sekretaer.activiteEnParalelle;
  const profession=this.sekretaer.profession;
  const quartier=this.sekretaer.quartier;
  const numTel=this.sekretaer.numTel;
  const email=this.sekretaer.email;
  const numCni=this.sekretaer.numCni;
  const password=this.sekretaer.password;
  const diplomeEleve=this.sekretaer.diplomeEleve;
  const dateDebutActiviteOuCours=new Date(this.sekretaer.dateDebutActiviteOuCours);
  const accountActivated=this.sekretaer.accountActivated;
  const dateInscription = new Date(this.sekretaer.dateInscription);
  const roles=this.sekretaer.roles;
  this.personne ={
    username, nom,
    prenom,
    dateNaissance,nationalite,profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,activiteEnParalelle,accountActivated,dateInscription,roles

    };
   // console.log("die gesendete Name ist "+this.sekretaer.nom);


 }
}
@HostListener('window:mousemove', ['$event'])
receiveGeupdateteInfosPerson(personne : Personne){

this.updateteGemeinsameInfosPerson=personne;
console.log("geupdatete kontoAktivieren ist"+this.updateteGemeinsameInfosPerson.accountActivated);
}


@HostListener('window: mousemove', ['$event'])
getValidationGemeinsameInfosPersonne(validate :string){
this.validation=validate;
console.log('validation auch hier'+this.validation);

if(!this.updateSekretaerForm.valid && this.validation==='false' || this.updateSekretaerForm.valid&&this.validation==='false' ||!this.updateSekretaerForm.valid&&this.validation==='true')
{
this.submitted=false;
}
if(this.updateSekretaerForm.valid&& this.validation==='true'){this.submitted=true;}
}



get form(): { [key: string]: AbstractControl } {
return this.updateSekretaerForm.controls;
}
kontoAktivieren : boolean = true;
valeur:string='Ja';

onActivieren(){
if(this.kontoAktivieren && this.valeur=='Ja'){
this.valeur='Nein';
this.kontoAktivieren=false;

} else if(! this.kontoAktivieren && this.valeur=='Nein'){
this.kontoAktivieren=true;
this.valeur='Ja';}

}


onUpdateSekretaer(){
    if (!this.updateSekretaerForm.valid) {
          console.log('Formulaire invalide')

            return;
          }


 const nom=this.updateteGemeinsameInfosPerson.nom;
  const prenom=this.updateteGemeinsameInfosPerson.prenom;
  const dateNaissance=this.updateteGemeinsameInfosPerson.dateNaissance;
   const nationalite=this.updateteGemeinsameInfosPerson.nationalite;
 const activiteEnParalelle= this.updateteGemeinsameInfosPerson.activiteEnParalelle;
  const profession=this.updateteGemeinsameInfosPerson.profession;
  const quartier=this.updateteGemeinsameInfosPerson.quartier;
  const numTel=this.updateteGemeinsameInfosPerson.numTel;
  const email=this.updateteGemeinsameInfosPerson.email;
  const numCni=this.updateteGemeinsameInfosPerson.numCni;
  const password=this.updateteGemeinsameInfosPerson.password;
  const diplomeEleve=this.updateteGemeinsameInfosPerson.diplomeEleve;
  const dateDebutActiviteOuCours=this.updateteGemeinsameInfosPerson.dateDebutActiviteOuCours;
  const accountActivated=this.updateteGemeinsameInfosPerson.accountActivated;
const salaire = this.updateSekretaerForm.value.salaire;
const nbreMoisExperiences = this.updateSekretaerForm.value.nbreMoisExperiences;
const languesSekretaer = this.updateSekretaerForm.value.languesSekretaer;
const roles =this.updateteGemeinsameInfosPerson.roles;

const username= this.updateSekretaerForm.value.username;

const dateInscription : Date= new Date();
  const sekretaer :  Sekretaer={
            username: this.sekretaer.username,
            nom,
            prenom,
            dateNaissance,
            nationalite,
            profession,
            quartier,
            numTel,
            email,
            numCni,
            password,
            diplomeEleve,
            dateDebutActiviteOuCours,
            activiteEnParalelle,
            accountActivated,
            dateInscription,
            languesSekretaer,
            salaire,
            nbreMoisExperiences,
            roles
           }
console.log("valeur finale de isActived"+accountActivated);



this.store.dispatch( UpdateSekretaerActions({sekretaer : sekretaer})  );
        this.router.navigate(['/willkommen/sekretaer/liste-sekretaer']);


}
}
