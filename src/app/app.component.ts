import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {Store} from '@ngrx/store';
import { getLoading } from './Appstore/shared/shared.selector';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';
import {GetAllSprachenActions} from './ngrx/sprache/sprachen.actions';
import {GetAllKurseActions} from './ngrx/kurs/kurs.actions';
import {GetAllNiveausActions} from './ngrx/niveau/niveau.actions';
import {GetAllRaumeActions} from './ngrx/raum/raume.actions';
import {getSprachen}  from './ngrx/sprache/sprachen.selector';
import {getKurse} from './ngrx/kurs/kurs.selector';
import {getNiveaus} from './ngrx/niveau/niveau.selector';
import {getRaume} from './ngrx/raum/raume.selector';
import {AppState} from './Appstore/app.state';
import {Observable} from 'rxjs'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'DrE';
      showLoading: Observable<boolean> | null = null;

  constructor(
  private store: Store<AppState>,
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService

  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
//  getSprachen.release();
   this.store.dispatch(GetAllSprachenActions());
  this.store.dispatch(GetAllNiveausActions() );
  this.store.dispatch(GetAllRaumeActions() );
  this.store.select(getSprachen);
  this.store.select(getNiveaus);
  this.store.select(getRaume);
 // this.store.select(getSprachen);
    this.showLoading = this.store.select(getLoading);

//this.store.select(getNiveaus);// recupere l'etat du selecteur getSprachen dans le store

    this.router.events.subscribe((evt) => {
       if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
