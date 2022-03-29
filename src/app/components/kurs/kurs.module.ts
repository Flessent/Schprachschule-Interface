import { NgModule,APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KursRoutingModule } from './kurs-routing.module';
import { ItemKursComponent } from './list-kurs/item-kurs/item-kurs.component';
import { NeuerKursComponent } from './neuer-kurs/neuer-kurs.component';
import { UpdateKursComponent } from './update-kurs/update-kurs.component';
import { DetailsKursComponent } from './details-kurs/details-kurs.component';
import {EffectsModule} from '@ngrx/effects';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {kurseReducer} from '../../ngrx/kurs/kurs.reducer';
import {KURS_STATE_NAME} from '../../ngrx/kurs/kurs.selector';
import {StoreModule} from '@ngrx/store';
import { MatDatepickerModule } from '@angular/material/datepicker';
    import { MatNativeDateModule } from '@angular/material/core';
    import {MatInputModule} from '@angular/material/input';
    import { MatCardModule } from '@angular/material/card';
    import {Store} from '@ngrx/store';
import {MatIconModule} from '@angular/material/icon';
import {KursEffects} from '../../ngrx/kurs/kurs.effect';
    import { MatButtonModule } from '@angular/material/button';
    import {  MatSelectModule } from '@angular/material/select';
    import {ListKursComponent} from './list-kurs/list-kurs.component';
    import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from "../../../environments/environment";
import {AppState} from '../../Appstore/app.state';
import {niveausReducer} from "../../ngrx/niveau/niveau.reducer";
import {raumeReducer} from '../../ngrx/raum/raume.reducer';
import {sprachenReducer} from "../../ngrx/sprache/sprachen.reducer";
import {GetAllSprachenActions} from "../../ngrx/sprache/sprachen.actions";
import {GetAllRaumeActions} from "../../ngrx/raum/raume.actions";
import {GetAllNiveausActions} from "../../ngrx/niveau/niveau.actions";
import { SPRACHE_STATE_NAME } from '../../ngrx/sprache/sprachen.selector';
import {NIVEAU_STATE_NAME} from '../../ngrx/niveau/niveau.selector';
import {RAUME_STATE_NAME} from '../../ngrx/raum/raume.selector';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SprachenEffects } from '../../ngrx/sprache/sprachen.effects';
import {NiveauEffects} from '../../ngrx/niveau/niveau.effect';
import {RaumeEffects} from '../../ngrx/raum/raume.effect';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
@NgModule({
  declarations: [
    ItemKursComponent,
    NeuerKursComponent,
    UpdateKursComponent,
    DetailsKursComponent,
    ListKursComponent,

  ],
  imports: [
  MatSnackBarModule,
  StoreModule.forFeature(NIVEAU_STATE_NAME, niveausReducer),
      StoreModule.forFeature(RAUME_STATE_NAME, raumeReducer),
          StoreModule.forFeature(SPRACHE_STATE_NAME, sprachenReducer),
    EffectsModule.forFeature([SprachenEffects]),
    EffectsModule.forFeature([NiveauEffects]),
   EffectsModule.forFeature([RaumeEffects]),

    NgxMatDatetimePickerModule,
      NgxMatTimepickerModule,
      NgxMatNativeDateModule,
  MatButtonModule,MatSelectModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
      CommonModule,
      KursRoutingModule,
       EffectsModule.forRoot([KursEffects]),
          StoreModule.forFeature(KURS_STATE_NAME, kurseReducer),
      FormsModule,
      ReactiveFormsModule,
    CommonModule,
    KursRoutingModule
  ],
  providers: [
    {
  provide: APP_INITIALIZER,
  useFactory: (store: Store<AppState>)=>{
  return ()=> {
  store.dispatch(GetAllSprachenActions() );
  store.dispatch(GetAllNiveausActions() );
  store.dispatch(GetAllRaumeActions() );


  };
  },
  multi :true,
  deps: [Store]
    }

  ]

})
export class KursModule { }
