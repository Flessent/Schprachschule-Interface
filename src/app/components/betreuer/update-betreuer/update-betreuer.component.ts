import { Component, OnInit,HostListener } from '@angular/core';
import {FormBuilder,ReactiveFormsModule,AbstractControl, FormGroup, Validators,FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import { ActivatedRoute,Router } from '@angular/router';
import {AppState} from '../../../Appstore/app.state';
import { Subscription,Observable } from 'rxjs';
import {Betreuer} from '../../../model/betreuer';
import {getBetreuerByUsername} from '../../../ngrx/betreuer/betreuer.selector';
import {SpracheService} from '../../../services/sprache/sprache.service';
import {Sprache} from '../../../model/sprache';
import {Niveau} from "../../../model/niveau";
import {UpdateBetreuerActions} from '../../../ngrx/betreuer/betreuer.actions';
import {getNiveaus} from '../../../ngrx/niveau/niveau.selector';
import {getSprachen} from '../../../ngrx/sprache/sprachen.selector';
import {Personne} from "../../../model/personne";

@Component({
  selector: 'app-update-betreuer',
  templateUrl: './update-betreuer.component.html',
  styleUrls: ['./update-betreuer.component.scss']
})
export class UpdateBetreuerComponent implements OnInit {

updateBetreuerForm !: FormGroup;
sprachen !: Observable<Sprache[]> ;
listeNiv : Niveau[]=[];
betreuerSubscription! : Subscription;
kontoAk : boolean=false;
 personne ! : Personne;
submitted : boolean = false;
niveaus: Observable<Niveau[]> | null = null;
listSprachen: Sprache[] = [];
listeNiveaus : Niveau[] = [];
niveausByLibelleSprache : Observable<Niveau[]> | null = null;
 gemeinsameInfosPerson ! : Personne;
 validation: string = '';
 betreuer !: Betreuer;
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
    this.betreuerSubscription=  this.store.select(getBetreuerByUsername, {username}).subscribe((betreuer )  => {

        if (betreuer) {
          this.betreuer = betreuer;
          this.sendGemeinsameInfosPerson();
          this.updateBetreuerForm.patchValue({//patchValue aktualisiert nur Eigenschaften, die das Formularmodell definiert.
        // username:student.username,

                  sprache:betreuer.sprache,
                  niveau:betreuer.niveau,
                       salaire:betreuer.salaire,
                       nbreMoisExperiences:betreuer.nbreMoisExperiences



          });
          this.kontoAk=betreuer.accountActivated;// recuperation du intensive du sprache ä update
         console.log('valeur du backend de isActived'+this.kontoAk);
        }

      });
 });
 //console.log('abgeholter Student'+this.betreuer.nom);

   }

createForm() {
this.updateBetreuerForm =this.formBuilder.group({
//username:new FormControl("", [Validators.required,Validators.minLength(6)]),

       // isActived:new FormControl(this.kontoAk),
        sprache:new FormControl([], [Validators.required]),
        niveau:new FormControl([], [Validators.required]),
salaire : new FormControl([], [Validators.required, Validators.minLength(5)]),
nbreMoisExperiences : new FormControl([], [Validators.required])

})}

//@HostListener('window: mousemove', ['$event'])
sendGemeinsameInfosPerson(){
 if(this.betreuer){
 const username="Nicht Erlaubt";
  const nom=this.betreuer.nom;
  const prenom=this.betreuer.prenom;
  const dateNaissance=new Date(this.betreuer.dateNaissance);
   const nationalite=this.betreuer.nationalite;
 const activiteEnParalelle= this.betreuer.activiteEnParalelle;
  const profession=this.betreuer.profession;
  const quartier=this.betreuer.quartier;
  const numTel=this.betreuer.numTel;
  const email=this.betreuer.email;
  const numCni=this.betreuer.numCni;
  const password=this.betreuer.password;
  const diplomeEleve=this.betreuer.diplomeEleve;
  const dateDebutActiviteOuCours=new Date(this.betreuer.dateDebutActiviteOuCours);
  const accountActivated=this.betreuer.accountActivated;
  const dateInscription = new Date(this.betreuer.dateInscription);
  const roles=this.betreuer.roles;
  this.personne ={
    username, nom,
    prenom,
    dateNaissance,nationalite,profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,activiteEnParalelle,accountActivated,dateInscription,roles

    };
   // console.log("die gesendete Name ist "+this.betreuer.nom);


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

if(!this.updateBetreuerForm.valid && this.validation==='false' || this.updateBetreuerForm.valid&&this.validation==='false' ||!this.updateBetreuerForm.valid&&this.validation==='true')
{
this.submitted=false;
}
if(this.updateBetreuerForm.valid&& this.validation==='true'){this.submitted=true;}
}



get form(): { [key: string]: AbstractControl } {
return this.updateBetreuerForm.controls;
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


onUpdateBetreuer(){
    if (!this.updateBetreuerForm.valid) {
          console.log('Formulaire invalide')
console.log(this.updateBetreuerForm.value.nom,this.updateBetreuerForm.value.prenom,
this.updateBetreuerForm.value.dateNaissance,this.updateBetreuerForm.value.nationalite,
this.updateBetreuerForm.value.profession,this.updateBetreuerForm.value.quartier,
this.updateBetreuerForm.value.numTel, this.updateBetreuerForm.value.email,
this.updateBetreuerForm.value.numCni, this.updateBetreuerForm.value.password,
this.updateBetreuerForm.value.diplomeEleve,this.updateBetreuerForm.value.dateDebutActiviteOuCours,
this.updateBetreuerForm.value.activiteEnParalelle,this.updateBetreuerForm.value.isActived,this.updateBetreuerForm.value.sprache,
this.updateBetreuerForm.value.niveau,this.updateBetreuerForm.value.salaire,this.updateBetreuerForm.value.nbreMoisExperiences)
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
const salaire = this.updateBetreuerForm.value.salaire;
const nbreMoisExperiences = this.updateBetreuerForm.value.nbreMoisExperiences;
const roles=this.updateteGemeinsameInfosPerson.roles;
//let accountActivated = this.gemeinsameInfosPerson.accountActivated;
  //   accountActivated=this.kontoAktivieren;



const sprachess= this.updateBetreuerForm.value.sprache;






  const langues= this.updateBetreuerForm.value.sprache;
  const niveauss =this.updateBetreuerForm.value.niveau;


console.log("liste niveau choisis"+niveauss);
let listeSpr : string[]=[];
let sprs: Sprache[] = [];
this.store.select(getSprachen).subscribe(sprachen =>
  {this.listSprachen = sprachen;});
  sprs = this.listSprachen.filter(sprache => this.updateBetreuerForm?.value.sprache.includes(sprache.libelle));
 sprs.forEach(spr =>listeSpr.push(spr.codeSprache) );

const sprache= listeSpr;

const niveau: string[]=[]
this.store.select(getNiveaus).subscribe(nivs =>
  {this.listeNiv = nivs;});
  let niveaus: Niveau[] = [];
  niveaus = this.listeNiv.filter((niv : Niveau )=> this.updateBetreuerForm?.value.niveau.includes(niv.libelle));
 niveaus.forEach(niv =>niveau.push(niv.codeNiveau) );
const username= this.updateBetreuerForm.value.username;

const dateInscription : Date= new Date();
  const betreuer :  Betreuer={
            username: this.betreuer.username,
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
            roles
           }
console.log("valeur finale de isActived"+accountActivated);



this.store.dispatch( UpdateBetreuerActions({betreuer : betreuer})  );
        this.router.navigate(['/willkommen/betreuer/liste-betreuer']);


}


}
