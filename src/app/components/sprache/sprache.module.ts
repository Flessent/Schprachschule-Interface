import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpracheRoutingModule } from './sprache-routing.module';
import { NeueSpracheComponent } from  './neue-sprache/neue-sprache.component';
import { ListSpracheComponent } from  './list-sprache/list-sprache.component';
import { ItemSpracheComponent } from  './list-sprache/item-sprache/item-sprache.component';
import {StoreModule} from '@ngrx/store';
// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

// Popover Components
import { PopoverModule } from 'ngx-bootstrap/popover';

// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
//import {StoreModule, StoreRootModule} from "@ngrx/store";
import {sprachenReducer} from "../../ngrx/sprache/sprachen.reducer";
import {EffectsModule} from "@ngrx/effects";
import {SprachenEffects} from "../../ngrx/sprache/sprachen.effects";
//import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SPRACHE_STATE_NAME } from '../../ngrx/sprache/sprachen.selector';
import { UpdateSpracheComponent } from './update-sprache/update-sprache.component';
import { DetailsComponent } from './details/details.component';
 import {  MatSelectModule } from '@angular/material/select'
import {ItemNiveauComponent } from '../niveau/list-niveau/item-niveau/item-niveau.component';
    import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from "../../../environments/environment";

@NgModule({
 imports: [
  /*StoreDevtoolsModule.instrument({
         maxAge: 25, // Retains last 25 states
         logOnly: environment.production, // Restrict extension to log-only mode
         autoPause: true, // Pauses recording actions and state changes when the extension window is not open
       })*/
    CommonModule,
    SpracheRoutingModule,
    //StoreModule.forRoot({catalogueSprachenState: sprachenReducer}), //Erstellung von einer Variable catalogueSprachenState, dessen das Typ sprachenReducer ist
   EffectsModule.forRoot([SprachenEffects]),
  StoreModule.forFeature(SPRACHE_STATE_NAME, sprachenReducer),
FormsModule, MatSelectModule,
ReactiveFormsModule
  ],
  declarations: [
  //ItemNiveauComponent,
    NeueSpracheComponent,
    ListSpracheComponent,
    ItemSpracheComponent,
    UpdateSpracheComponent,
    DetailsComponent,
  ],

})
export class SpracheModule { }
