import { Component, OnInit,Output,EventEmitter ,HostListener,Input} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder,FormGroup,Validators, AbstractControl,FormControl} from '@angular/forms';
import { Personne} from "../../../../model/personne";
import { Roles} from "../../../../model/roles";
import {Observable} from "rxjs";
import { getRoles} from "../../../../ngrx/roles/roles.selector";
import {Store} from '@ngrx/store';
import { AppState} from "../../../../Appstore/app.state";

@Component({
  selector: 'app-neue-personne',
  templateUrl: './neue-personne.component.html',
  styleUrls: ['./neue-personne.component.scss']
})
export class NeuePersonneComponent implements OnInit {

status:string = '';
 constructor(private formBuilder: FormBuilder, private store : Store<AppState> ) { }
gemeinsameInfosFormGroup !: FormGroup;
listeRolle : Observable<Roles[]> | null = null;
submitted : boolean = false;
@Output() personne:  EventEmitter<Personne> = new EventEmitter();
@Output() validation:  EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  this.listeRolle=this.store.select(getRoles);
  this.gemeinsameInfosFormGroup = this.formBuilder.group({
             username:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    nom:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    prenom:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    dateNaissance:new FormControl( new Date()),
                            nationalite:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    profession:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    quartier:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    numTel:  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]], //VAlidation von Telefonnummer
                    email:['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$")]],
                    numCni:new FormControl(0, [Validators.required,Validators.minLength(6) ]),
                    password:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    diplomeEleve:new FormControl("", [Validators.required,Validators.minLength(6)]),
                    dateDebutActiviteOuCours:new FormControl(new Date() ),
            activiteEnParalelle: new FormControl("", [Validators.required,Validators.minLength(6)]),
            //[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}
                    isActived:new FormControl(true),
                    roles : new FormControl([], [Validators.required])

    });

  }

  @HostListener('window: mousemove', ['$event'])
getValiditeGemeinsameInfosFormGroup(validate : string){
validate=this.status;
//console.log("Ursprung der Validierung"+validate);
this.validation.emit(validate);

}
@HostListener('document: mousemove', ['$event'])
  getAllGemeinsameInfos(personne : Personne) : string{
if(!this.gemeinsameInfosFormGroup.valid){this.status='false';
console.log('invalid aber in GemeinsameInfosFormGroup '+this.kontoAktivieren);
}
else{
this.status='true';

  const username=this.gemeinsameInfosFormGroup.value.username;
  const nom = this.gemeinsameInfosFormGroup.value.nom;
  const prenom = this.gemeinsameInfosFormGroup.value.prenom;
const dateNaissance=this.gemeinsameInfosFormGroup.value.dateNaissance;
const nationalite = this.gemeinsameInfosFormGroup.value.nationalite;
const profession = this.gemeinsameInfosFormGroup.value.profession;
const quartier = this.gemeinsameInfosFormGroup.value.quartier;
const numCni = this.gemeinsameInfosFormGroup.value.numCni;
const numTel = this.gemeinsameInfosFormGroup.value.numTel;
const email = this.gemeinsameInfosFormGroup.value.email;
const password = this.gemeinsameInfosFormGroup.value.password;
const diplomeEleve = this.gemeinsameInfosFormGroup.value.diplomeEleve;
const dateDebutActiviteOuCours = this.gemeinsameInfosFormGroup.value.dateDebutActiviteOuCours;
const activiteEnParalelle = this.gemeinsameInfosFormGroup.value.activiteEnParalelle;
const accountActivated = this.kontoAktivieren;
const dateInscription = new Date();
const roles =this.gemeinsameInfosFormGroup.value.roles;

  personne ={
  username,
  nom,
  prenom,
  dateNaissance,nationalite,profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,activiteEnParalelle,accountActivated,dateInscription,roles

  };
console.log('Das sind die Infos aus Kind'+accountActivated);
this.personne.emit(personne);


}
return this.status;
  }
get form(): { [key: string]: AbstractControl } {
return this.gemeinsameInfosFormGroup.controls;
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
