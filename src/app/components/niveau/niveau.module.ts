import { NgModule,APP_INITIALIZER } from '@angular/core';
import {Store} from '@ngrx/store';

import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { NiveauRoutingModule } from './niveau-routing.module';
import {niveausReducer} from '../../ngrx/niveau/niveau.reducer';
import {NIVEAU_STATE_NAME} from '../../ngrx/niveau/niveau.selector';
import {StoreModule} from '@ngrx/store';
import {NiveauEffects} from '../../ngrx/niveau/niveau.effect';
import {EffectsModule} from '@ngrx/effects';
import { NeuesNiveauComponent } from './neues-niveau/neues-niveau.component';
import { ListNiveauComponent } from './list-niveau/list-niveau.component';
import { UpdateNiveauComponent } from './update-niveau/update-niveau.component';
import { DetailsNiveauComponent } from './details-niveau/details-niveau.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
    import { MatNativeDateModule } from '@angular/material/core';
    import {MatInputModule} from '@angular/material/input';
    import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
    import { MatButtonModule } from '@angular/material/button';
    import {  MatSelectModule } from '@angular/material/select';
import { ItemNiveauComponent } from './list-niveau/item-niveau/item-niveau.component';
import { SPRACHE_STATE_NAME } from '../../ngrx/sprache/sprachen.selector';
import { SprachenEffects } from '../../ngrx/sprache/sprachen.effects';
import {sprachenReducer} from "../../ngrx/sprache/sprachen.reducer";

import {GetAllSprachenActions} from "../../ngrx/sprache/sprachen.actions";
import {AppState} from '../../Appstore/app.state';

@NgModule({
  declarations: [ NeuesNiveauComponent, ListNiveauComponent, UpdateNiveauComponent, DetailsNiveauComponent, ItemNiveauComponent],
  imports: [
  MatSelectModule,
MatButtonModule,MatSelectModule,
  MatCardModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
    CommonModule,
    NiveauRoutingModule,
     EffectsModule.forRoot([NiveauEffects]),
        StoreModule.forFeature(NIVEAU_STATE_NAME, niveausReducer),
            EffectsModule.forFeature([SprachenEffects]),
          StoreModule.forFeature(SPRACHE_STATE_NAME, sprachenReducer),

    FormsModule,
    ReactiveFormsModule
  ],
    providers: [
      {
    provide: APP_INITIALIZER,
    useFactory: (store: Store<AppState>)=>{
    return ()=> {
    store.dispatch(GetAllSprachenActions() );



    };
    },
    multi :true,
    deps: [Store]
      }

    ]
})
export class NiveauModule { }
