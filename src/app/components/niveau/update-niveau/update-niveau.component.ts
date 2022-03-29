import { Component, OnInit } from '@angular/core';
import {Niveau} from '../../../model/niveau';
import { DatePipe } from '@angular/common';
import {AppState} from '../../../Appstore/app.state';
import {Router,ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl,FormBuilder, Validators,AbstractControl } from '@angular/forms';
import {getNiveauByCodeNiveau} from '../../../ngrx/niveau/niveau.selector';
import {UpdateNiveauActions} from '../../../ngrx/niveau/niveau.actions';
import {Observable} from 'rxjs';
import {Sprache} from '../../../model/sprache';
@Component({
  selector: 'app-update-niveau',
  templateUrl: './update-niveau.component.html',
  styleUrls: ['./update-niveau.component.scss']
})
export class UpdateNiveauComponent implements OnInit {
 niveau !: Niveau;
   submitted:boolean=false;
   updateNiveauForm !: FormGroup;
   niveauSubscription !: Subscription;
   sprachs: string[] = [];
   sprachen: Observable<string[]> | null = null;
   constructor(private store: Store<AppState>, private router: Router, private activatedRoute: ActivatedRoute, private formBuilder : FormBuilder) {}
       listSprachen : Sprache[] = []

 createForm() {
     this.updateNiveauForm = this.formBuilder.group({
       libelle: new FormControl('null', [Validators.required, Validators.minLength(2) ]),
       prix : new FormControl( 0, [Validators.required,Validators.minLength(3) ]),
       date_debut : new FormControl(null ),
       date_fin : new FormControl(null ),
      sprache: [ [], Validators.required]


     });
   }
     onUpdateNiveau() {
        if (!this.updateNiveauForm.valid) {
        console.log('Formulaire invalide')

          return;
        }

        const libelle = this.updateNiveauForm.value.libelle;
        const prix = this.updateNiveauForm.value.prix;
        const date_debut=this.updateNiveauForm.value.date_debut;
        const date_fin=this.updateNiveauForm.value.date_fin;
             const sprache=this.updateNiveauForm.value.sprache;

        const niveau: Niveau = {
          codeNiveau: this.niveau.codeNiveau,
          libelle,
          prix,
          date_debut,
          date_fin,
          sprache
        };
        console.log("je suis sprache dans update Niveau"+sprache);
        this.store.dispatch(UpdateNiveauActions({ niveau }));
        this.router.navigate(['/willkommen/niveau/liste-niveaus']);
      }
      get form(): { [key: string]: AbstractControl } {
          return this.updateNiveauForm.controls;
        }
  ngOnInit(): void {
//const datePipe: DatePipe = new DatePipe('en-US');
//let formattedDate = datepipe.transform(yourDate, 'dd-MMM-YYYY HH:mm:ss')
  this.createForm();
  this.activatedRoute.paramMap.subscribe(params => {
  const codeNiveau=params.get('codeNiveau');
     this.niveauSubscription=  this.store.select(getNiveauByCodeNiveau, {codeNiveau}).subscribe((niveau) => {
         if (niveau) {
           this.niveau = niveau;
           console.log('voici les dates'+niveau.date_debut,niveau.date_fin);
           this.updateNiveauForm.patchValue({//patchValue aktualisiert nur Eigenschaften, die das Formularmodell definiert.
             libelle: niveau.libelle, //affecte les diiferent valeurs de l'ancien niveau au nouveau niveau update aux different champs formulaire updateSpracheForm
             prix: niveau.prix,
             date_debut : new Date(niveau.date_debut),
             date_fin : new Date(niveau.date_fin),
             sprache : niveau.sprache,
           });
                    this.sprachs=niveau.sprache;

         }

       });
  })

  }

}
