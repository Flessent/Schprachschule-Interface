import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllNiveausActions,GetAllNiveausActionsSuccess} from "../../../ngrx/niveau/niveau.actions";
import {NiveauState} from "../../../ngrx/niveau/niveau.state";
import {Niveau} from "../../../model/niveau";
import {AppState} from "../../../Appstore/app.state";
import {getNiveaus} from '../../../ngrx/niveau/niveau.selector';
import {Observable} from 'rxjs';
import {DeleteNiveauActions} from "../../../ngrx/niveau/niveau.actions";
import {getSprachen} from "../../../ngrx/sprache/sprachen.selector";
import {Sprache} from "../../../model/sprache";
import {GetAllSprachenByCodeSprachenActions} from "../../../ngrx/sprache/sprachen.actions";
import {SpracheService} from '../../../services/sprache/sprache.service';


@Component({
  selector: 'app-list-niveau',
  templateUrl: './list-niveau.component.html',
  styleUrls: ['./list-niveau.component.scss']
})
export class ListNiveauComponent implements OnInit {
niveaus : Observable<Niveau[]> | null = null;



  constructor(private store : Store<AppState>, private spracherService : SpracheService) { }
  ngOnInit(): void {
      this.niveaus = this.store.select(getNiveaus);// recupere l'etat du selecteur getSprachen dans le store

      this.store.dispatch(GetAllNiveausActions());
  }

  onDeleteNiveau(codeNiveau: string) {
     if (confirm('Sind Sie sicher diese Daten  löchen zu wollen ? Es gibt kein Zurück mehr !')) {
     console.log('voici le codeNiveau concerne'+codeNiveau);
       this.store.dispatch(DeleteNiveauActions({ codeNiveau }));
     }
     }
}
