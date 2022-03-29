import { Component, OnInit,HostListener } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import {Store} from '@ngrx/store';
import {FormGroup, AbstractControl, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Subscription,of} from 'rxjs';
import {AppState} from '../../../Appstore/app.state';
import {Kurs} from '../../../model/kurs';
import {Sprache} from '../../../model/sprache';
import {Raum} from '../../../model/raum';
import {Niveau} from '../../../model/niveau';
import {Observable} from 'rxjs';
import {UpdateKursActions} from '../../../ngrx/kurs/kurs.actions';
import {getKursByCodeKurs} from '../../../ngrx/kurs/kurs.selector';
import {getRaume} from '../../../ngrx/raum/raume.selector';
import {getSprachen} from '../../../ngrx/sprache/sprachen.selector';
import {getNiveaus} from '../../../ngrx/niveau/niveau.selector';
import {SpracheService} from '../../../services/sprache/sprache.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {KursService} from '../../../services/kurs/kurs.service'
@Component({
  selector: 'app-update-kurs',
  templateUrl: './update-kurs.component.html',
  styleUrls: ['./update-kurs.component.scss']
})
export class UpdateKursComponent implements OnInit {
spr! : Sprache;
raumse! : Raum;
niveause : Niveau[] = [];
recoveryKurs(){
this.store.select(getSprachen).subscribe(sprachen => {
this.spr!=sprachen.find(sprache => this.kurs.langue===sprache.codeSprache);
})
}



@HostListener('document: mousemove', ['$event'])
 openSnackBar(kurs: string, action: string) {
 kurs='test';
     this._snackBar.open(kurs, action,  { duration : 30000});
    }

get form(): { [key: string]: AbstractControl } {
          return this.updateKursForm.controls;
        }

 oneSprache!: Sprache;


kurs ! : Kurs;
updateKursForm !: FormGroup;
kursSubscription !: Subscription;
  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute, private router: Router, private formBuilder : FormBuilder
  ,private spracheService : SpracheService,private _snackBar: MatSnackBar, private kursServices : KursService) { }

   submitted:boolean=false;
   listeRaume : Raum[]=[]
listeSprachen : Sprache[] = [];
listRaume : Observable<Raum[]> | null = null;
listSprachen : Observable<Sprache[]> | null = null;
listNiveaus : Observable<Niveau[]> | null = null;
niveausByLibelleSprache : Observable<Niveau[]> | null=null;
listeNiveau : string[]=[];

listeNiv : Niveau[]=[];
onSp(libelleSprache : string){
this.niveausByLibelleSprache =this.spracheService.getAllNiveauByLibelleSprache(libelleSprache);
 }

  ngOnInit(): void {
  this.createForm();
  this.listRaume = this.store.select(getRaume);// Anzeige alle Raüme vor dem Update
  this.listSprachen= this.store.select(getSprachen);
  this.niveausByLibelleSprache= this.store.select(getNiveaus);
  this.activatedRoute.paramMap.subscribe(params => {
  const codeKurs=params.get('codeKurs');
  this.kursSubscription= this.store.select(getKursByCodeKurs, {codeKurs} ).subscribe((kurs) => {
  if (kurs) {
  this.kurs = kurs;
  this.updateKursForm.patchValue({
  niveau : kurs.niveau,
  raum : kurs.raum,
  langue : kurs.langue.split(""),
  au_programme : kurs.au_programme,
   heure_debut :new Date( kurs.heure_debut),
  heure_fin :  new Date (kurs.heure_fin),
  professeur : kurs.professeur

  })
  console.log('voici le niveau'+kurs.niveau);

this.listeNiveau.concat(kurs.niveau);
  }


  })
  });



  }
  createForm(){
  this.updateKursForm=this.formBuilder.group({
langue : [ [], Validators.required  ],
au_programme : new FormControl('', [Validators.required, Validators.minLength(10)]),
heure_debut : new FormControl(null),
heure_fin : new FormControl(null),
niveau : [ [], Validators.required  ],
raume : [  [], Validators.required  ],
professeur : new FormControl('', [Validators.required, Validators.minLength(7) ] )
  })
  }
@HostListener('document: mouseenter', ['$event'])
onMouseMove(kurs :string, action : string){

 const langue='' //this.findSprache(this.kurs.langue)//this.oneSprache.libelle;
let niveaus : string= this.kurs.niveau.join(';');
let raums: string= this.kurs.raum.join(';')
const  sprache:string="Sprache :"; const niveau:string='Niveau : ';const raum: string='Raum :';
//kurs =sprache+langue+niveau+niveaus+raum+raums;
this.openSnackBar(langue,action);
}

  onUpdateKurs(){
    if (!this.updateKursForm.valid) {
          console.log('Formulaire invalide')

            return;
          }

  const langues= this.updateKursForm.value.langue;
  const au_programme= this.updateKursForm.value.au_programme;
  const heure_debut = this.updateKursForm.value.heure_debut;
  const heure_fin = this.updateKursForm.value.heure_fin;
  const niveauss =this.updateKursForm.value.niveau;
  const raumss= this.updateKursForm.value.raume;
  const professeur = this.updateKursForm.value.professeur;
console.log("liste niveau choisis"+niveauss);

 this.store.select(getSprachen).subscribe(sprachen =>
    {this.listeSprachen = sprachen;});
    //debugger;
this.oneSprache =this.listeSprachen.find((sprache:Sprache)  => this.updateKursForm?.value.langue.includes(sprache.libelle))!;

const langue = this.oneSprache.codeSprache;


const niveau: string[]=[]
this.store.select(getNiveaus).subscribe(nivs =>
  {this.listeNiv = nivs;});
  let niveaus: Niveau[] = [];
  niveaus = this.listeNiv.filter((niv : Niveau )=> this.updateKursForm?.value.niveau.includes(niv.libelle));
 niveaus.forEach(niv =>niveau.push(niv.codeNiveau) );

      const  raum : string[] = [];

 this.store.select(getRaume).subscribe(raums =>
    {this.listeRaume = raums;});
    let listRaumes : Raum[];
        listRaumes = this.listeRaume.filter((raum : Raum)=> this.updateKursForm?.value.raume.includes(raum.nom_raume));
           listRaumes.forEach(raums => raum.push(raums.codeRaum));


  const kurs: Kurs = {
  codeKurs : this.kurs.codeKurs,
  niveau,
  raum,
  langue,
  au_programme,
  heure_debut,
  heure_fin,
  professeur
 }

this.store.dispatch( UpdateKursActions({kurs : kurs})  );
        this.router.navigate(['/willkommen/kurs/liste-kurse']);


 }





}
