import { Component, OnInit ,Input} from '@angular/core';
import {Sekretaer} from "../../../../model/sekretaer";
import {DeleteSekretaerActions} from "../../../../ngrx/sekretaer/sekretaer.actions"
import {Store} from "@ngrx/store";
 import {AppState} from "../../../../Appstore/app.state";

@Component({
  selector: 'app-item-sekretaer',
  templateUrl: './item-sekretaer.component.html',
  styleUrls: ['./item-sekretaer.component.scss']
})
export class ItemSekretaerComponent implements OnInit {
  @Input() sekretaer !: Sekretaer;


    constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
  }
  onDeleteSekretaer(username: string) {
      if (confirm('Sind Sie sicher diese Daten  löchen zu wollen ? Es gibt kein Zurück mehr !')) {
      //console.log('voici le codeSprache concerne'+codeSprache);
        this.store.dispatch(DeleteSekretaerActions({usernameSekretaer :username }));


      }
    }
}
