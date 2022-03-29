import { Component, OnInit,Input,EventEmitter , Output} from '@angular/core';
import {Kurs} from "../../../../model/kurs";
import {Store} from "@ngrx/store";
import {Sprache} from "../../../../model/sprache";
import {getSprachen} from "../../../../ngrx/sprache/sprachen.selector";
import {map} from 'rxjs/operators';
import {getNiveaus} from "../../../../ngrx/niveau/niveau.selector";
import {getRaume} from "../../../../ngrx/raum/raume.selector";
import {Raum} from "../../../../model/raum";

import {AppState} from "../../../../Appstore/app.state";
import {DeleteKursActions} from "../../../../ngrx/kurs/kurs.actions";
import {Niveau} from "../../../../model/niveau";

@Component({
  selector: 'app-item-kurs',
  templateUrl: './item-kurs.component.html',
  styleUrls: ['./item-kurs.component.scss']
})

export class ItemKursComponent implements OnInit {
libel: string='';
spracheChoice : any;
listeSprach!:Sprache[];
@Input() kurs! : Kurs;//vers liste Niveau
//@Output() niveaus = new EventEmitter<Niveau[]>();//vers Neue Sprache
  constructor(private store : Store<AppState>) { }
//stringListeNiveauKurs = this.kurs.niveau.join(',')
libelleNiv : any;
nomRaum:string='';
  ngOnInit(): void {
 // console.log(this.kurs.langue);

   this.getNiveauKurse(this.kurs);
  this.getSprachKurs(this.kurs);
  this.getRaumKurs(this.kurs);
  }

  listeRaume :any
  listeNiveau  : any;
 listeLibelleNiv : string[]=[];
 listeNomRaum:string[]=[];

getNiveauKurse(kurs : Kurs){
for(let i = 0; i < kurs.niveau.length; i++){
 this.store.select(getNiveaus).subscribe( ( listeNivs : Niveau[] ) => {
  this.listeNiveau =listeNivs.filter(niveau => kurs.niveau[i].includes(niveau.codeNiveau)  ).
  forEach( niveau => this.listeLibelleNiv.push( niveau.libelle ) );// liste des libelle de sprachen

  });

this.libelleNiv= this.listeLibelleNiv.join(';');
}

}

getRaumKurs(kurs :Kurs){
  for(let i=0;i<kurs.raum.length;i++){
  this.store.select(getRaume).subscribe( ( listeRaums : Raum[] ) => {
    this.listeRaume =listeRaums.filter(raum => kurs.raum[i].includes(raum.codeRaum)  ).
    forEach( raum => this.listeNomRaum.push( raum.nom_raume ) );// liste des libelle de sprachen
    });
    //this.listeNomRaum=[];
    this.nomRaum=this.listeNomRaum.join(';');


  }
}

  getSprachKurs(kurs :Kurs){
    this.store.select(getSprachen).subscribe( ( listeSprachen : Sprache[] ) => {
    this.listeSprach = listeSprachen;
this.listeSprach=listeSprachen;
for ( let i=0; i<this.listeSprach.length; i++ ){
if (this.kurs!.langue==this.listeSprach[i].codeSprache){
this.libel=this.listeSprach[i].libelle;
console.log('ich bin libel'+this.libel)
}
}
})

  }


  onDeleteKurs(codeKurs: string) {
     if (confirm('Sind Sie sicher diese Daten  löchen zu wollen ? Es gibt kein Zurück mehr !')) {
     console.log('voici le codeKurs concerne'+codeKurs);
       this.store.dispatch(DeleteKursActions({ codeKurs }));
     }
}

}
