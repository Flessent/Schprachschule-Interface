import { Component, OnInit,Input,EventEmitter , Output} from '@angular/core';
import {Niveau} from "../../../../model/niveau";
import {Sprache} from "../../../../model/sprache";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../Appstore/app.state";
import {DeleteNiveauActions} from "../../../../ngrx/niveau/niveau.actions";
import {SpracheService} from "../../../../services/sprache/sprache.service";
import {getSprachen} from "../../../../ngrx/sprache/sprachen.selector";
//import {GetAllSprachenActions} from "../../../../ngrx/niveau/niveau.actions";

@Component({
  selector: 'app-item-niveau',
  templateUrl: './item-niveau.component.html',
  styleUrls: ['./item-niveau.component.scss']
})
export class ItemNiveauComponent implements OnInit {
@Input() niveau! : Niveau;//vers liste Niveau
//@Output() niveaus = new EventEmitter<Niveau[]>();//vers Neue Sprache
  constructor(private store : Store<AppState>, private spracheService : SpracheService) { }
listeSprachs: string[]=[];
listeLibelleSpr: string[]=[];
listeCodeSprachen: string[]=[];
libelleSprach: string='';
listeSpr!: Sprache[];

  ngOnInit(): void {

  this.store.select(getSprachen).subscribe( ( listeSprachen : Sprache[] ) => {
  this.listeSpr=listeSprachen.filter(sprache => this.niveau!.sprache.includes(sprache.codeSprache)  )
  } );
  this.listeSpr.forEach( sprache => this.listeLibelleSpr.push( sprache.libelle ) );// liste des libelle de sprachen
    this.listeSpr.forEach( sprache => this.listeCodeSprachen.push( sprache.codeSprache ) );// liste des UUID de sprachen
this.listeSpr.filter(sprache => this.niveau!.sprache.includes(sprache.codeSprache)  );//liste des sprachen dont le uuuid est dans niveau



this.libelleSprach=this.listeLibelleSpr.join(',');
  }
  onDeleteNiveau(codeNiveau: string) {
     if (confirm('Sind Sie sicher diese Daten  löchen zu wollen ? Es gibt kein Zurück mehr !')) {
       this.store.dispatch(DeleteNiveauActions({ codeNiveau }));
     }
}
}
