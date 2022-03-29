import { Component, OnInit,Input } from '@angular/core';
import {Niveau} from "../../../../model/niveau";
import {Betreuer} from "../../../../model/betreuer";
import {Sprache} from "../../../../model/sprache";
import {getNiveaus} from "../../../../ngrx/niveau/niveau.selector";
import {getSprachen} from "../../../../ngrx/sprache/sprachen.selector";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../Appstore/app.state";
import {DeleteBetreuerActions} from "../../../../ngrx/betreuer/betreuer.actions";

@Component({
  selector: 'app-item-betreuer',
  templateUrl: './item-betreuer.component.html',
  styleUrls: ['./item-betreuer.component.scss']
})
export class ItemBetreuerComponent implements OnInit {
@Input() betreuer !: Betreuer;
libel: string='';
spracheChoice : any;
listeSprach!:Sprache[];
libelleNiv : any;
libelleSpr : any;
listeRaume :any
  listeNiveau  : any;
 listeLibelleNiv : string[]=[];
 listeLibelleSpr:string[]=[];

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
     this.getNiveauBetreuer(this.betreuer);
   this.getSpracheBetreuer(this.betreuer);
  console.log('Voici le nom du betreuer'+this.betreuer.nom)
  }

 onDeleteBetreuer(username: string) {
    if (confirm('Sind Sie sicher diese Daten  löchen zu wollen ? Es gibt kein Zurück mehr !')) {
    //console.log('voici le codeSprache concerne'+codeSprache);
      this.store.dispatch(DeleteBetreuerActions({usernameBetreuer :username }));


    }
  }
  getSpracheBetreuer(betreuer :Betreuer){
  for(let i = 0; i < betreuer.sprache.length; i++){
   this.store.select(getSprachen).subscribe( ( sprachen : Sprache[] ) => {
    this.spracheChoice =sprachen.filter(sprache => betreuer.sprache[i].includes(sprache.codeSprache)  ).
    forEach( sprache => this.listeLibelleSpr.push( sprache.libelle ) );// liste des libelle de sprachen

    });

  this.libelleSpr= this.listeLibelleSpr.join(';');
  }

  }
getNiveauBetreuer(betreuer : Betreuer){
for(let i = 0; i < betreuer.niveau.length; i++){
 this.store.select(getNiveaus).subscribe( ( listeNivs : Niveau[] ) => {
  this.listeNiveau =listeNivs.filter(niveau => betreuer.niveau[i].includes(niveau.codeNiveau)  ).
  forEach( niveau => this.listeLibelleNiv.push( niveau.libelle ) );// liste des libelle de sprachen

  });

this.libelleNiv= this.listeLibelleNiv.join(';');
}}


}
