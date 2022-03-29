import { Component, OnInit,HostListener } from '@angular/core';
import {FormBuilder,ReactiveFormsModule,AbstractControl, FormGroup, Validators,FormControl} from '@angular/forms';
import {Store} from '@ngrx/store';
import { ActivatedRoute,Router } from '@angular/router';
import {AppState} from '../../../Appstore/app.state';
import { Subscription,Observable } from 'rxjs';
import {Student} from '../../../model/student';
import {getStudentByUsername} from '../../../ngrx/student/student.selector';
import {SpracheService} from '../../../services/sprache/sprache.service';
import {Sprache} from '../../../model/sprache';
import {Niveau} from "../../../model/niveau";
import {UpdateStudentActions} from '../../../ngrx/student/student.actions';
import {getNiveaus} from '../../../ngrx/niveau/niveau.selector';
import {getSprachen} from '../../../ngrx/sprache/sprachen.selector';
import {Personne} from '../../../model/personne';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent implements OnInit {

updateStudentForm !: FormGroup;
studentSubscription! : Subscription;
niveausByLibelleSprache : Observable<Niveau[]> | null=null;
sprachen !: Observable<Sprache[]> ;
listeNiv : Niveau[]=[];
listSprachen: Sprache[] = [];
 updateteGemeinsameInfosPerson ! : Personne;
 personne ! : Personne;

  constructor(private formBuilder : FormBuilder, private spracheService : SpracheService,private activatedRoute: ActivatedRoute,private store: Store<AppState>, private router: Router) { }
student ! : Student;
isActived : boolean=false;
kontoAk : boolean=false;

submitted : boolean = false;
onSp(libelleSprache : string){
this.niveausByLibelleSprache =this.spracheService.getAllNiveauByLibelleSprache(libelleSprache);
 }
  ngOnInit(): void {
this.createForm();//Erstellung eines leeren Formular
 this.sprachen= this.store.select(getSprachen);
  this.niveausByLibelleSprache= this.store.select(getNiveaus);
this.activatedRoute.paramMap.subscribe(params => {
const username=params.get('username');
   this.studentSubscription=  this.store.select(getStudentByUsername, {username}).subscribe((student )  => {

       if (student) {
         this.student = student;
          this.sendGemeinsameInfosPerson();
         this.updateStudentForm.patchValue({//patchValue aktualisiert nur Eigenschaften, die das Formularmodell definiert.
       // username:student.username,
                 nom:student.nom,
                 prenom:student.prenom,
                 dateNaissance:new Date(student.dateNaissance ),
                         nationalite:student.nationalite,
                 profession:student.profession,
                 quartier:student.quartier,
                 numTel:student.numTel,
                 email:student.email,
                 numCni:student.numCni,
                 password:student.password,
                 diplomeEleve:student.diplomeEleve,
                 dateDebutActiviteOuCours:new Date(student.dateDebutActiviteOuCours),
                  activiteEnParalelle: student.activiteEnParalelle,
               isActived:student.accountActivated,
                 sprache:student.sprache,
                 niveau:student.niveau,
                         numTelFinanceurCours:student.numTelFinanceurCours,
                 numTelMereOuTutrice:student.numTelMereOuTutrice,
                 numTelPereOuTuteur:student.numTelPereOuTuteur,
                 nomFinanceurCours:student.nomFinanceurCours,
                 nomPereOuTuteur:student.nomPereOuTuteur,
                 nomMereOuTutrice:student.nomMereOuTutrice,
                  roles:student.roles


         });
         this.kontoAk=student.accountActivated;// recuperation du intensive du sprache ä update
        console.log('valeur du backend de isActived'+this.kontoAk);

       }
       if(this.kontoAk){
       this.valeur='Ja';
       this.kontoAktivieren=true;

       } else{
       this.valeur='Nein';
       this.kontoAktivieren=false;
       }
     });
});
//console.log('abgeholter Student'+this.student.nom);

  }

createForm() {
this.updateStudentForm =this.formBuilder.group({
//username:new FormControl("", [Validators.required,Validators.minLength(6)]),

        sprache:new FormControl([], [Validators.required]),
        niveau:new FormControl([], [Validators.required]),
                numTelFinanceurCours:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
numTelMereOuTutrice:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        numTelPereOuTuteur:  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        nomFinanceurCours:new FormControl("", [Validators.required,Validators.minLength(6)]),
        nomPereOuTuteur:new FormControl("", [Validators.required,Validators.minLength(6)]),
        nomMereOuTutrice:new FormControl(" ", [Validators.required,Validators.minLength(6)]),
})}

sendGemeinsameInfosPerson(){
 if(this.student){
 const username=this.student.username;
  const nom=this.student.nom;
  const prenom=this.student.prenom;
  const dateNaissance=new Date(this.student.dateNaissance);
   const nationalite=this.student.nationalite;
 const activiteEnParalelle= this.student.activiteEnParalelle;
  const profession=this.student.profession;
  const quartier=this.student.quartier;
  const numTel=this.student.numTel;
  const email=this.student.email;
  const numCni=this.student.numCni;
  const password=this.student.password;
  const diplomeEleve=this.student.diplomeEleve;
  const dateDebutActiviteOuCours=new Date(this.student.dateDebutActiviteOuCours);
  const accountActivated=this.student.accountActivated;
  const dateInscription = new Date(this.student.dateInscription);
  const roles=this.student.roles;
  this.personne ={
    username, nom,
    prenom,
    dateNaissance,nationalite,profession,quartier,numTel,email,numCni,password,diplomeEleve,dateDebutActiviteOuCours,activiteEnParalelle,accountActivated,dateInscription,roles

    };
    console.log("die gesendete Name ist "+this.student.nom); }
}
@HostListener('window:mousemove', ['$event'])
receiveGeupdateteInfosPerson(personne : Personne){

this.updateteGemeinsameInfosPerson=personne;
console.log("geupdatete Name ist"+this.updateteGemeinsameInfosPerson.nom);
}


get form(){
    return this.updateStudentForm.controls;
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


onUpdateStudent(){
    if (!this.updateStudentForm.valid) {
          console.log('Formulaire invalide')
console.log(this.updateStudentForm.value.nom,this.updateStudentForm.value.prenom,
this.updateStudentForm.value.dateNaissance,this.updateStudentForm.value.nationalite,
this.updateStudentForm.value.profession,this.updateStudentForm.value.quartier,
this.updateStudentForm.value.numTel, this.updateStudentForm.value.email,
this.updateStudentForm.value.numCni, this.updateStudentForm.value.password,
this.updateStudentForm.value.diplomeEleve,this.updateStudentForm.value.dateDebutActiviteOuCours,
this.updateStudentForm.value.activiteEnParalelle,this.updateStudentForm.value.isActived,this.updateStudentForm.value.sprache,
this.updateStudentForm.value.niveau,this.updateStudentForm.value.numTelMereOuTutrice,
this.updateStudentForm.value.numTelFinanceurCours,this.updateStudentForm.value.numTelPereOuTuteur,
this.updateStudentForm.value.nomFinanceurCours, this.updateStudentForm.value.nomMereOuTutrice,
this.updateStudentForm.value.nomPereOuTuteur)
console.log(this.kontoAktivieren);
            return;
          }

 //const username=this.gemeinsameInfosPerson.username;
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
         const numTelFinanceurCours= this.updateStudentForm.value.numTelFinanceurCours;
        const numTelMereOuTutrice= this.updateStudentForm.value.numTelMereOuTutrice;
        const numTelPereOuTuteur=this.updateStudentForm.value.numTelPereOuTuteur;
        const nomFinanceurCours= this.updateStudentForm.value.nomFinanceurCours;
        const nomPereOuTuteur= this.updateStudentForm.value.nomPereOuTuteur;
        const nomMereOuTutrice= this.updateStudentForm.value.nomMereOuTutrice;


const sprachess= this.updateStudentForm.value.sprache;






  const langues= this.updateStudentForm.value.sprache;
  const niveauss =this.updateStudentForm.value.niveau;


console.log("liste niveau choisis"+niveauss);
let listeSpr : string[]=[];
let sprs: Sprache[] = [];
this.store.select(getSprachen).subscribe(sprachen =>
  {this.listSprachen = sprachen;});
  sprs = this.listSprachen.filter(sprache => this.updateStudentForm?.value.sprache.includes(sprache.libelle));
 sprs.forEach(spr =>listeSpr.push(spr.codeSprache) );

const sprache= listeSpr;

const niveau: string[]=[]
this.store.select(getNiveaus).subscribe(nivs =>
  {this.listeNiv = nivs;});
  let niveaus: Niveau[] = [];
  niveaus = this.listeNiv.filter((niv : Niveau )=> this.updateStudentForm?.value.niveau.includes(niv.libelle));
 niveaus.forEach(niv =>niveau.push(niv.codeNiveau) );
const username= this.updateStudentForm.value.username;
const salaire = 0;
const nbreMoisExperiences = 0;
const dateInscription : Date= new Date();
  const student :  Student={
            username: this.student.username,
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
            numTelFinanceurCours,
            numTelMereOuTutrice,
            numTelPereOuTuteur,
            nomFinanceurCours,
            nomPereOuTuteur,
            nomMereOuTutrice,
            sprache,
            niveau,
            salaire,
            nbreMoisExperiences,
            roles
           }
console.log("valeur finale de isActived"+accountActivated);



this.store.dispatch( UpdateStudentActions({student : student})  );
        this.router.navigate(['/willkommen/student/liste-student']);


}






}
