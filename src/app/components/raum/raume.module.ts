import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { RaumeRoutingModule } from './raume-routing.module';
import {raumeReducer} from '../../ngrx/raum/raume.reducer';
import {RAUME_STATE_NAME} from '../../ngrx/raum/raume.selector';
import {StoreModule} from '@ngrx/store';
import {RaumeEffects} from '../../ngrx/raum/raume.effect';
import {EffectsModule} from '@ngrx/effects';
import { ItemRaumComponent } from './list-raum/item-raum/item-raum.component';
import { NeuerRaumComponent } from './neuer-raum/neuer-raum.component';
import { ListRaumComponent } from './list-raum/list-raum.component';
import { DetailsRaumComponent } from './details-raum/details-raum.component';
import { UpdateRaumComponent } from './update-raum/update-raum.component';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ItemRaumComponent,ListRaumComponent,NeuerRaumComponent,DetailsRaumComponent,UpdateRaumComponent
  ],
  imports: [
    CommonModule,
    RaumeRoutingModule,
    EffectsModule.forRoot([RaumeEffects]),
            StoreModule.forFeature(RAUME_STATE_NAME, raumeReducer),
        FormsModule,
        ReactiveFormsModule,
        //BrowserModule
  ]
})
export class RaumeModule { }
