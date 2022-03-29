import { Component, OnInit,Input } from '@angular/core';
import {Student} from "../../../../model/student";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../Appstore/app.state";
import {DeleteStudentActions} from "../../../../ngrx/student/student.actions";
import {Niveau} from "../../../../model/niveau";
import {Sprache} from "../../../../model/sprache";
import {getNiveaus} from "../../../../ngrx/niveau/niveau.selector";
import {getSprachen} from "../../../../ngrx/sprache/sprachen.selector";

@Component({
  selector: 'app-item-student',
  templateUrl: './item-student.component.html',
  styleUrls: ['./item-student.component.scss']
})
export class ItemStudentComponent implements OnInit {
libel: string='';
spracheChoice : any;
listeSprach!:Sprache[];
libelleNiv : any;
libelleSpr : any;
listeRaume :any
  listeNiveau  : any;
 listeLibelleNiv : string[]=[];
 listeLibelleSpr:string[]=[];
statusKonto : string='aaaaaa';



getSpracheStudent(student :Student){
for(let i = 0; i < student.sprache.length; i++){
 this.store.select(getSprachen).subscribe( ( sprachen : Sprache[] ) => {
  this.spracheChoice =sprachen.filter(sprache => student.sprache.includes(sprache.codeSprache)  ).
  forEach( sprache => this.listeLibelleSpr.push( sprache.libelle ) );// liste des libelle de sprachen

  });

this.libelleSpr= this.listeLibelleSpr.join(';');
}

}

@Input() student! : Student;
intensive : string='';
  constructor(private store : Store<AppState>) { }
 onDeleteStudent(username: string) {
    if (confirm('Sind Sie sicher diese Daten  löchen zu wollen ? Es gibt kein Zurück mehr !')) {
    console.log('voici le username concerne'+this.student.username);
      this.store.dispatch(DeleteStudentActions({ username }));


    }
  }
  ngOnInit(): void {
     this.getNiveauStudent(this.student);
   this.getSpracheStudent(this.student);
  }



getNiveauStudent(student : Student){
for(let i = 0; i < student.niveau.length; i++){
 this.store.select(getNiveaus).subscribe( ( listeNivs : Niveau[] ) => {
  this.listeNiveau =listeNivs.filter(niveau => student.niveau[i].includes(niveau.codeNiveau)  ).
  forEach( niveau => this.listeLibelleNiv.push( niveau.libelle ) );// liste des libelle de sprachen

  });

this.libelleNiv= this.listeLibelleNiv.join(';');
}

}








}

