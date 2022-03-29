import { Component, OnInit,OnDestroy } from '@angular/core';
import {Sprache} from '../../../model/sprache';
import {AppState} from '../../../Appstore/app.state';
import {Router,ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription,Observable } from 'rxjs';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import {getSpracheByCodeSprache,getSpracheById} from '../../../ngrx/sprache/sprachen.selector';
import {UpdateSpracheActions} from '../../../ngrx/sprache/sprachen.actions';
@Component({
  selector: 'app-update-sprache',
  templateUrl: './update-sprache.component.html',
  styleUrls: ['./update-sprache.component.scss']
})
export class UpdateSpracheComponent implements OnInit,OnDestroy {
intensive : boolean=false;
 sprache !: Sprache;
   updateSpracheForm !: FormGroup;
   spracheSubscription !: Subscription;
   constructor(private store: Store<AppState>, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder : FormBuilder) {}
niveaux: string[] = [];
niveaus: Observable<string[]> | null = null;

   ngOnInit(): void {
        this.createForm();//Erstellung eines leeren Formular
this.activatedRoute.paramMap.subscribe(params => {
const codeSprache=params.get('codeSprache');
   this.spracheSubscription=  this.store.select(getSpracheByCodeSprache, {codeSprache}).subscribe((sprache) => {

       if (sprache) {
         this.sprache = sprache;
         this.updateSpracheForm.patchValue({//patchValue aktualisiert nur Eigenschaften, die das Formularmodell definiert.
           libelle: sprache.libelle, // on affecte les diiferentes valeurs de sprache ä update aux differents champs du formulaire updateSpracheForm
           intensive: sprache.intensive,

         });
         this.intensive=sprache.intensive;// recuperation du intensive du sprache ä update
       }
       if(this.intensive){
       this.valeur='Ja';
       this.intensivKurs=true;

       } else{
       this.valeur='Nein';
       this.intensivKurs=false;
       }
     });
})

   }      //toppings : this.formBuilder.array(this.listSprachen),

   createForm() {
     this.updateSpracheForm = this.formBuilder.group({
       libelle: new FormControl('null', [Validators.required, Validators.minLength(6) ]),
       intensive : new FormControl(this.intensive),
     });
   }
   valeur:string='';
intensivKurs : boolean = false;
//this.valeur='Ja';
Titel1 : String ='Änderungen umsetzen ! ';
onIntensiv(){
if(this.intensivKurs && this.valeur=='Ja'){
this.valeur='Nein';
this.intensivKurs=false;

} else if(! this.intensivKurs && this.valeur=='Nein'){
this.intensivKurs=true;
this.valeur='Ja';}

}
   onSubmit() {
     if (!this.updateSpracheForm.valid) {
     console.log('Formulaire invalide')

       return;
     }

     const libelle = this.updateSpracheForm.value.libelle;
     let intensive = this.updateSpracheForm.value.intensive;
     intensive=this.intensivKurs; // intensivKurs est le seul qui contient la valeur de la propriete intensive lors du update
     const sprache: Sprache = {
       codeSprache: this.sprache.codeSprache,
       libelle,
       intensive

     };
console.log('voici this.intensivKurs'+this.intensivKurs)
console.log('das sind die Werte'+ sprache.libelle,sprache.intensive)
     this.store.dispatch(UpdateSpracheActions({ sprache }));
     this.router.navigate(['/willkommen/sprache/liste-sprache']);
   }

   ngOnDestroy() {
     if (this.spracheSubscription) {
       this.spracheSubscription.unsubscribe();
     }
   }
}
