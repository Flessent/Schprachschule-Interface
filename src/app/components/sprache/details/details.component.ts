import { Component, OnInit } from '@angular/core';
import {Sprache} from '../../../model/sprache';
import {Niveau} from '../../../model/niveau';
import {AppState} from '../../../Appstore/app.state';
import {Store} from '@ngrx/store';
import {Observable,of} from 'rxjs'
import {getSpracheByCodeSprache} from '../../../ngrx/sprache/sprachen.selector';
import {filter,map} from 'rxjs/operators';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
sprache: Observable<Sprache | null | undefined> | null = null;
//*******niveaus : Observable<string[]> | null = null;
spracheData: Sprache | null | undefined = null;
spracheNiveau: string = '';
sp : Sprache[] = [];
  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
      this.store.select(getSpracheByCodeSprache).subscribe(sprache => {
        this.spracheData = sprache!;
      });
         //   +++++++  this.spracheNiveau = this.spracheData!.niveau.map(niveau => niveau).join(", ");

      //debugger;
  }

}
