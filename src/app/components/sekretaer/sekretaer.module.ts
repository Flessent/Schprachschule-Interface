import { NgModule } from '@angular/core';
import { SekretaerRoutingModule } from './sekretaer-routing.module';
import { CommonModule } from '@angular/common';
import {MatRippleModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
 import { MatNativeDateModule } from '@angular/material/core';
 import {  MatSelectModule } from '@angular/material/select';
 import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
    import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {UpdateSekretaerComponent} from './update-sekretaer/update-sekretaer.component';
import {sekretaerReducer} from "../../ngrx/sekretaer/sekretaer.reducer";
import {EffectsModule} from "@ngrx/effects";
import {SekretaerEffects} from "../../ngrx/sekretaer/sekretaer.effects";
import { SEKRETAER_STATE_NAME } from '../../ngrx/sekretaer/sekretaer.selector';
import {StoreModule} from '@ngrx/store';
import {NeuerSekretaerComponent} from './neuer-sekretaer/neuer-sekretaer.component';
//import {ItemSekretaerComponent} from'./list-sekretaer/item-sekretaer/item-sekretaer.component';
import {GemeinsameInfosModule} from '../personal/gemeinsame-infos/gemeinsame-infos.module';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { ListSekretaerComponent } from './list-sekretaer/list-sekretaer.component';
import { ItemSekretaerComponent } from './list-sekretaer/item-sekretaer/item-sekretaer.component';
@NgModule({
declarations: [NeuerSekretaerComponent,UpdateSekretaerComponent, ListSekretaerComponent, ItemSekretaerComponent],
  imports: [
  GemeinsameInfosModule,
  EffectsModule.forRoot([SekretaerEffects]),
      StoreModule.forFeature(SEKRETAER_STATE_NAME, sekretaerReducer),
    CommonModule,
    MatGridListModule,
MatCardModule,
  MatDatepickerModule,
      MatButtonModule,MatSelectModule,
        MatNativeDateModule,
      MatFormFieldModule,MatInputModule,
  NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
      MatRippleModule,MatIconModule,
                      ReactiveFormsModule,FormsModule,MatGridListModule,
    SekretaerRoutingModule
  ]
})
export class SekretaerModule { }
