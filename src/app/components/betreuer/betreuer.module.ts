import { NgModule } from '@angular/core';
import {MatRippleModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
    import {MatInputModule} from '@angular/material/input';
    import { MatNativeDateModule } from '@angular/material/core';
    import {  MatSelectModule } from '@angular/material/select';
    import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
    import { MatCardModule } from '@angular/material/card';
import {NeuerBetreuerComponent} from './neuer-betreuer/neuer-betreuer.component';
import {ListBetreuerComponent} from './list-betreuer/list-betreuer.component';
import {ItemBetreuerComponent} from './list-betreuer/item-betreuer/item-betreuer.component';
import {GemeinsameInfosModule} from '../personal/gemeinsame-infos/gemeinsame-infos.module';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import {StoreModule} from '@ngrx/store';
import {betreuerReducer} from "../../ngrx/betreuer/betreuer.reducer";
import {EffectsModule} from "@ngrx/effects";
import {BetreuerEffects} from "../../ngrx/betreuer/betreuer.effects";
import { BETREUER_STATE_NAME } from '../../ngrx/betreuer/betreuer.selector';
import { BetreuerRoutingModule } from './betreuer-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {UpdateBetreuerComponent} from './update-betreuer/update-betreuer.component';

@NgModule({
  declarations: [NeuerBetreuerComponent, ListBetreuerComponent,ItemBetreuerComponent,UpdateBetreuerComponent],
  imports: [
  GemeinsameInfosModule,
  MatGridListModule,
    EffectsModule.forRoot([BetreuerEffects]),
    StoreModule.forFeature(BETREUER_STATE_NAME, betreuerReducer),
    MatCardModule,
  MatDatepickerModule,
      MatButtonModule,MatSelectModule,
        MatNativeDateModule,
      MatFormFieldModule,
  NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
      MatRippleModule,MatIconModule,
                      ReactiveFormsModule,FormsModule,MatGridListModule,
    CommonModule,
    BetreuerRoutingModule, MatInputModule
  ]
})
export class BetreuerModule { }
