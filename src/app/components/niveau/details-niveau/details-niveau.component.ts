import { Component, OnInit } from '@angular/core';
import {Niveau} from '../../../model/niveau';
import {AppState} from '../../../Appstore/app.state';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs'
import {getNiveauByCodeNiveau} from '../../../ngrx/niveau/niveau.selector';
import {of} from 'rxjs';
@Component({
  selector: 'app-details-niveau',
  templateUrl: './details-niveau.component.html',
  styleUrls: ['./details-niveau.component.scss']
})
export class DetailsNiveauComponent implements OnInit {
niveau: Observable<Niveau | null | undefined> | null = null;

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
        this.niveau = this.store.select(getNiveauByCodeNiveau);

  }

}
