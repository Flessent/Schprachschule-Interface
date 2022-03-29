import { Component, OnInit,Input,Output,EventEmitter,HostListener } from '@angular/core';
import { Personne} from "../../../../model/personne";
import {FormBuilder,FormGroup,Validators, AbstractControl,FormControl} from '@angular/forms';
import { Roles} from "../../../../model/roles";
import {Observable} from "rxjs";
import { getRoles} from "../../../../ngrx/roles/roles.selector";
import {Store} from '@ngrx/store';
import { AppState} from "../../../../Appstore/app.state";
@Component({
  selector: 'app-von-update-personne',
  templateUrl: './von-update-personne.component.html',
  template: `
  UpdatePersonInfos : {{vonUpdatedPersonne}}`,
  styleUrls: ['./von-update-personne.component.scss']
})
export class VonUpdatePersonneComponent implements OnInit {
@Input() vonUpdatedPersonne !: Personne;
vonUpdatePersonFormGroup !: FormGroup;
@Output() updatedInfosPerson : EventEmitter<Personne>=new EventEmitter();
@Output() validation:  EventEmitter<string> = new EventEmitter();
status:string = '';
listeRolle : Observable<Roles[]> | null = null;

  constructor(private formBuilder: FormBuilder,private store : Store<AppState>) { }
isActived : boolean=false;
kontoAk : boolean=false;

submitted : boolean = false;
  ngOnInit(): void {
  this.listeRolle=this.store.select(getRoles);
  this.createForm();
  if(this.vonUpdatedPersonne){
    console.log('executing constructor vonUpdatePersonFormGroup'+this.vonUpdatedPersonne.nom);

  this.vonUpdatePersonFormGroup.patchValue({
                   nom:this.vonUpdatedPersonne.nom,
                  prenom:this.vonUpdatedPersonne.prenom,
                  dateNaissance:new Date(this.vonUpdatedPersonne.dateNaissance ),
                          nationalite:this.vonUpdatedPersonne.nationalite,
                  profession:this.vonUpdatedPersonne.profession,
                  quartier:this.vonUpdatedPersonne.quartier,
                  numTel:this.vonUpdatedPersonne.numTel,
                  email:this.vonUpdatedPersonne.email,
                  numCni:this.vonUpdatedPersonne.numCni,
                  password:this.vonUpdatedPersonne.password,
                  diplomeEleve:this.vonUpdatedPersonne.diplomeEleve,
                  dateDebutActiviteOuCours:new Date(this.vonUpdatedPersonne.dateDebutActiviteOuCours),
                   activiteEnParalelle: this.vonUpdatedPersonne.activiteEnParalelle,
                accountActivated:this.vonUpdatedPersonne.accountActivated,
                 roles:this.vonUpdatedPersonne.roles

  });
           this.kontoAk=this.vonUpdatedPersonne.accountActivated;// recuperation du intensive du sprache ä update
             }
               if(this.kontoAk){
                      this.valeur='Ja';
                      this.kontoAktivieren=true;

                      } else{
                      this.valeur='Nein';
                      this.kontoAktivieren=false;
                      }
              }
    @HostListener('window: mousemove', ['$event'])
  getValiditeGemeinsameInfosFormGroup(validate : string){
  validate=this.status;
  //console.log("Ursprung der Validierung"+validate);
  this.validation.emit(validate);

  }

  @HostListener('window:mousemove', ['$event'])
sendGeupdateteInfosPerson(personne:Personne) : string{
if(!this.vonUpdatePersonFormGroup.valid){this.status='false';
console.log('kontoAktivieren '+this.kontoAktivieren);
console.log('status '+this.status);

}
else{
this.status='true';
const username=this.vonUpdatedPersonne.username;
  const nom=this.vonUpdatePersonFormGroup.value.nom;
  const prenom=this.vonUpdatePersonFormGroup.value.prenom;
  const dateNaissance=this.vonUpdatePersonFormGroup.value.dateNaissance;
   const nationalite=this.vonUpdatePersonFormGroup.value.nationalite;
 const activiteEnParalelle= this.vonUpdatePersonFormGroup.value.activiteEnParalelle;
  const profession=this.vonUpdatePersonFormGroup.value.profession;
  const quartier=this.vonUpdatePersonFormGroup.value.quartier;
  const numTel=this.vonUpdatePersonFormGroup.value.numTel;
  const email=this.vonUpdatePersonFormGroup.value.email;
  const numCni=this.vonUpdatePersonFormGroup.value.numCni;
  const password=this.vonUpdatePersonFormGroup.value.password;
  const diplomeEleve=this.vonUpdatePersonFormGroup.value.diplomeEleve;
  const dateDebutActiviteOuCours=this.vonUpdatePersonFormGroup.value.dateDebutActiviteOuCours;
  const accountActivated=this.kontoAktivieren;
const dateInscription = new Date();
const roles=this.vonUpdatePersonFormGroup.value.roles;
 personne ={
    username, nom,
    prenom,
    dateNaissance,nationalite,profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,activiteEnParalelle,accountActivated,dateInscription,roles

    };
    console.log("emit infos von Personne ist"+personne.nom);
this.updatedInfosPerson.emit(personne);
}
return this.status;
}
createForm(){
 this.vonUpdatePersonFormGroup = this.formBuilder.group({
            // username:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    nom:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    prenom:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    dateNaissance:new FormControl( new Date()),
                            nationalite:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    profession:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    quartier:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    numTel:  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]], //VAlidation von Telefonnummer
                    email:['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
                    numCni:new FormControl( [Validators.required,Validators.minLength(6) ]),
                    password:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    diplomeEleve:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    dateDebutActiviteOuCours:new FormControl(new Date() ),
            activiteEnParalelle: new FormControl("", [Validators.required,Validators.minLength(6)]),
            //[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}
                   // accountActivated:new FormControl(true),
                    roles : new FormControl([], [Validators.required])

    });
}
get form(): { [key: string]: AbstractControl } {
return this.vonUpdatePersonFormGroup.controls;
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


}
