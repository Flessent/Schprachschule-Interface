import { Component, OnInit,HostListener,Output,EventEmitter } from '@angular/core';
import {FormBuilder,FormGroup,Validators, AbstractControl,FormControl} from '@angular/forms';
import {Store} from "@ngrx/store";
import { getNiveaus} from "../../../ngrx/niveau/niveau.selector";
import {Niveau} from "../../../model/niveau";
import {Sprache} from "../../../model/sprache";
import {MatFormFieldModule} from '@angular/material/form-field';
import { getSprachen} from "../../../ngrx/sprache/sprachen.selector";
import {SpracheService} from "../../../services/sprache/sprache.service";
import {LehrerState} from "../../../ngrx/lehrer/lehrer.state";
import {Lehrer} from "../../../model/lehrer";
import {AppState} from '../../../Appstore/app.state';
import {Observable,Subscription} from 'rxjs';
import { Personne} from "../../../model/personne";
import {UpdateLehrerActions} from '../../../ngrx/lehrer/lehrer.actions';
import {getLehrerByUsername} from '../../../ngrx/lehrer/lehrer.selector';
import { ActivatedRoute,Router } from '@angular/router';
import {Roles} from "../../../model/roles";
import {getRoles} from "../../../ngrx/roles/roles.selector";
//import {GemeinsameInfosComponent} from '../../personal/gemeinsame-infos/gemeinsame-infos.component';
@Component({
  selector: 'app-update-lehrer',
  templateUrl: './update-lehrer.component.html',
  styleUrls: ['./update-lehrer.component.scss']
})
export class UpdateLehrerComponent implements OnInit {
updateLehrerForm! : FormGroup;
sprachen !: Observable<Sprache[]> ;
listeNiv : Niveau[]=[];
lehrerSubscription! : Subscription;
kontoAk : boolean=false;
 personne ! : Personne;
submitted : boolean = false;
niveaus: Observable<Niveau[]> | null = null;
listSprachen: Sprache[] = [];
listeNiveaus : Niveau[] = [];
niveausByLibelleSprache : Observable<Niveau[]> | null = null;
 gemeinsameInfosPerson ! : Personne;
 validation: string = '';
 lehrer !: Lehrer;
  updateteGemeinsameInfosPerson ! : Personne;

  constructor(private formBuilder : FormBuilder, private spracheService : SpracheService,private activatedRoute: ActivatedRoute,
  private store: Store<AppState>, private router: Router) { }
onSp(libelleSprache : string){
this.niveausByLibelleSprache =this.spracheService.getAllNiveauByLibelleSprache(libelleSprache);
 }


 ngOnInit(): void {
 this.createForm();//Erstellung eines leeren Formular
  this.sprachen= this.store.select(getSprachen);
   this.niveausByLibelleSprache= this.store.select(getNiveaus);
 this.activatedRoute.paramMap.subscribe(params => {
 const username=params.get('username');
    this.lehrerSubscription=  this.store.select(getLehrerByUsername, {username}).subscribe((lehrer )  => {

        if (lehrer) {
          this.lehrer = lehrer;
          this.sendGemeinsameInfosPerson();
          this.updateLehrerForm.patchValue({//patchValue aktualisiert nur Eigenschaften, die das Formularmodell definiert.
        // username:student.username,

                  sprache:lehrer.sprache,
                  niveau:lehrer.niveau,
                       salaire:lehrer.salaire,
                       nbreMoisExperiences:lehrer.nbreMoisExperiences



          });
          this.kontoAk=lehrer.accountActivated;// recuperation du intensive du sprache ä update
         console.log('valeur du backend de isActived'+this.kontoAk);
        }

      });
 });
 //console.log('abgeholter Student'+this.betreuer.nom);

   }

createForm() {
this.updateLehrerForm =this.formBuilder.group({
//username:new FormControl("", [Validators.required,Validators.minLength(6)]),

       // isActived:new FormControl(this.kontoAk),
        sprache:new FormControl([], [Validators.required]),
        niveau:new FormControl([], [Validators.required]),
salaire : new FormControl([], [Validators.required, Validators.minLength(5)]),
nbreMoisExperiences : new FormControl([], [Validators.required])

})}

//@HostListener('window: mousemove', ['$event'])
sendGemeinsameInfosPerson(){
 if(this.lehrer){
 const username="Nicht Erlaubt";
  const nom=this.lehrer.nom;
  const prenom=this.lehrer.prenom;
  const dateNaissance=new Date(this.lehrer.dateNaissance);
   const nationalite=this.lehrer.nationalite;
 const activiteEnParalelle= this.lehrer.activiteEnParalelle;
  const profession=this.lehrer.profession;
  const quartier=this.lehrer.quartier;
  const numTel=this.lehrer.numTel;
  const email=this.lehrer.email;
  const numCni=this.lehrer.numCni;
  const password=this.lehrer.password;
  const diplomeEleve=this.lehrer.diplomeEleve;
  const dateDebutActiviteOuCours=new Date(this.lehrer.dateDebutActiviteOuCours);
  const accountActivated=this.lehrer.accountActivated;
  const dateInscription = new Date(this.lehrer.dateInscription);
  const roles=this.lehrer.roles;
  this.personne ={
    username, nom,
    prenom,
    dateNaissance,nationalite,profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,activiteEnParalelle,accountActivated,dateInscription,roles

    };
   // console.log("die gesendete Name ist "+this.lehrer.nom);


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

if(!this.updateLehrerForm.valid && this.validation==='false' || this.updateLehrerForm.valid&&this.validation==='false' ||!this.updateLehrerForm.valid&&this.validation==='true')
{
this.submitted=false;
}
if(this.updateLehrerForm.valid&& this.validation==='true'){this.submitted=true;}
}



get form(): { [key: string]: AbstractControl } {
return this.updateLehrerForm.controls;
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


onUpdateLehrer(){
    if (!this.updateLehrerForm.valid) {
          console.log('Formulaire invalide')
console.log(this.updateLehrerForm.value.nom,this.updateLehrerForm.value.prenom,
this.updateLehrerForm.value.dateNaissance,this.updateLehrerForm.value.nationalite,
this.updateLehrerForm.value.profession,this.updateLehrerForm.value.quartier,
this.updateLehrerForm.value.numTel, this.updateLehrerForm.value.email,
this.updateLehrerForm.value.numCni, this.updateLehrerForm.value.password,
this.updateLehrerForm.value.diplomeEleve,this.updateLehrerForm.value.dateDebutActiviteOuCours,
this.updateLehrerForm.value.activiteEnParalelle,this.updateLehrerForm.value.isActived,this.updateLehrerForm.value.sprache,
this.updateLehrerForm.value.niveau,this.updateLehrerForm.value.salaire,this.updateLehrerForm.value.nbreMoisExperiences)
console.log(this.kontoAktivieren);
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
  const roles=this.updateteGemeinsameInfosPerson.roles;
const salaire = this.updateLehrerForm.value.salaire;
const nbreMoisExperiences = this.updateLehrerForm.value.nbreMoisExperiences;
//let accountActivated = this.gemeinsameInfosPerson.accountActivated;
  //   accountActivated=this.kontoAktivieren;



const sprachess= this.updateLehrerForm.value.sprache;






  const langues= this.updateLehrerForm.value.sprache;
  const niveauss =this.updateLehrerForm.value.niveau;


console.log("liste niveau choisis"+niveauss);
let listeSpr : string[]=[];
let sprs: Sprache[] = [];
this.store.select(getSprachen).subscribe(sprachen =>
  {this.listSprachen = sprachen;});
  sprs = this.listSprachen.filter(sprache => this.updateLehrerForm?.value.sprache.includes(sprache.libelle));
 sprs.forEach(spr =>listeSpr.push(spr.codeSprache) );

const sprache= listeSpr;

const niveau: string[]=[]
this.store.select(getNiveaus).subscribe(nivs =>
  {this.listeNiv = nivs;});
  let niveaus: Niveau[] = [];
  niveaus = this.listeNiv.filter((niv : Niveau )=> this.updateLehrerForm?.value.niveau.includes(niv.libelle));
 niveaus.forEach(niv =>niveau.push(niv.codeNiveau) );
const username= this.updateLehrerForm.value.username;
let rols : Roles [];
 let listeUUIDNiv : string[]=[];
 let listUUIDRolle :string[] = [];
this.store.select(getRoles).subscribe( roles => {
rols=roles.filter(role => this.updateteGemeinsameInfosPerson.roles.includes(role.role) )
rols.forEach(rolle => listUUIDRolle.push(rolle.codeRole)   )

});
const dateInscription : Date= new Date();
  const lehrer :  Lehrer={
            username: this.lehrer.username,
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
            sprache,
            niveau,
            salaire,
            nbreMoisExperiences,
            roles : listUUIDRolle
           }
console.log("valeur finale de isActived"+accountActivated);



this.store.dispatch( UpdateLehrerActions({lehrer : lehrer})  );
        this.router.navigate(['/willkommen/lehrer/liste-lehrer']);


}








}
