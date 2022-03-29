import { Component, OnInit,Input } from '@angular/core';
import {Niveau} from "../../../../model/niveau";
import {Lehrer} from "../../../../model/lehrer";
import {Sprache} from "../../../../model/sprache";
import {getNiveaus} from "../../../../ngrx/niveau/niveau.selector";
import {getSprachen} from "../../../../ngrx/sprache/sprachen.selector";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../Appstore/app.state";
import {DeleteLehrerActions} from "../../../../ngrx/lehrer/lehrer.actions"
@Component({
  selector: 'app-item-lehrer',
  templateUrl: './item-lehrer.component.html',
  styleUrls: ['./item-lehrer.component.scss']
})
export class ItemLehrerComponent implements OnInit {

  @Input() lehrer !: Lehrer;
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
       this.getNiveauLehrer(this.lehrer);
     this.getSpracheLehrer(this.lehrer);
    console.log('Voici le nom du lehrer'+this.lehrer.nom)
    }

   onDeleteLehrer(username: string) {
      if (confirm('Sind Sie sicher diese Daten  löchen zu wollen ? Es gibt kein Zurück mehr !')) {
      //console.log('voici le codeSprache concerne'+codeSprache);
        this.store.dispatch(DeleteLehrerActions({usernameLehrer :username }));


      }
    }
    getSpracheLehrer(lehrer :Lehrer){
    for(let i = 0; i < lehrer.sprache.length; i++){
     this.store.select(getSprachen).subscribe( ( sprachen : Sprache[] ) => {
      this.spracheChoice =sprachen.filter(sprache => lehrer.sprache[i].includes(sprache.codeSprache)  ).
      forEach( sprache => this.listeLibelleSpr.push( sprache.libelle ) );// liste des libelle de sprachen

      });

    this.libelleSpr= this.listeLibelleSpr.join(';');
    }

    }
  getNiveauLehrer(lehrer : Lehrer){
  for(let i = 0; i < lehrer.niveau.length; i++){
   this.store.select(getNiveaus).subscribe( ( listeNivs : Niveau[] ) => {
    this.listeNiveau =listeNivs.filter(niveau => lehrer.niveau[i].includes(niveau.codeNiveau)  ).
    forEach( niveau => this.listeLibelleNiv.push( niveau.libelle ) );// liste des libelle de sprachen

    });

  this.libelleNiv= this.listeLibelleNiv.join(';');
  }} ;


}

