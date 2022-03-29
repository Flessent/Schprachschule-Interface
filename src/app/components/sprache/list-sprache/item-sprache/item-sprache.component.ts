import { Component, OnInit,Input,EventEmitter } from '@angular/core';
import {Sprache} from "../../../../model/sprache";
import {DeleteSpracheActions,GetAllSprachenActions} from "../../../../ngrx/sprache/sprachen.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../Appstore/app.state";
import {getSprachen} from '../../../../ngrx/sprache/sprachen.selector';
@Component({
  selector: 'app-item-sprache',
  templateUrl: './item-sprache.component.html',
  styleUrls: ['./item-sprache.component.scss']
})
export class ItemSpracheComponent {
@Input() sprache! : Sprache;
intensive : string='';
  constructor(private store : Store<AppState>) { }
 onDeleteSprache(codeSprache: string) {
    if (confirm('Sind Sie sicher diese Daten  löchen zu wollen ? Es gibt kein Zurück mehr !')) {
    //console.log('voici le codeSprache concerne'+codeSprache);
      this.store.dispatch(DeleteSpracheActions({ codeSprache }));


    }
  }
  ngOnInit(): void {
  if(this.sprache.intensive){
this.intensive= String(this.sprache.intensive);
this.intensive='Ja';

  }else {this.intensive='Nein'}

  }


}
