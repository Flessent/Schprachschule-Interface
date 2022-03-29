import { Component, OnInit ,Input} from '@angular/core';
import {Raum} from "../../../../model/raum";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../Appstore/app.state";
import {DeleteRaumActions} from "../../../../ngrx/raum/raume.actions";
import {GetAllRaumeActions,GetAllRaumeActionsSuccess} from "../../../../ngrx/raum/raume.actions";
import {getRaume} from "../../../../ngrx/raum/raume.selector";
@Component({
  selector: 'app-item-raum',
  templateUrl: './item-raum.component.html',
  styleUrls: ['./item-raum.component.scss']
})
export class ItemRaumComponent implements OnInit {
@Input() raum! : Raum;//vers liste Niveau
//@Output() niveaus = new EventEmitter<Niveau[]>();//vers Neue Sprache
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
  console.log(this.raum.nom_raume)
  }
  onDeleteRaum(codeRaum: string) {
     if (confirm('Sind Sie sicher diese Daten  löchen zu wollen ? Es gibt kein Zurück mehr !')) {
     console.log('voici le codeRaume concerne'+codeRaum);
       this.store.dispatch(DeleteRaumActions({ codeRaum }));
     }
}

}
