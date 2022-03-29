import { NgModule } from '@angular/core';
import { LehrerRoutingModule } from './lehrer-routing.module';
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
import {UpdateLehrerComponent} from './update-Lehrer/update-lehrer.component';
import {lehrerReducer} from "../../ngrx/lehrer/lehrer.reducer";
import {EffectsModule} from "@ngrx/effects";
import {LehrerEffects} from "../../ngrx/lehrer/lehrer.effects";
import { LEHRER_STATE_NAME } from '../../ngrx/lehrer/lehrer.selector';
import {StoreModule} from '@ngrx/store';
import {NeuerLehrerComponent} from './neuer-Lehrer/neuer-lehrer.component';
//import {ItemLehrerComponent} from'./list-lehrer/item-lehrer/item-lehrer.component';
import {GemeinsameInfosModule} from '../personal/gemeinsame-infos/gemeinsame-infos.module';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { ListLehrerComponent } from './list-lehrer/list-lehrer.component';
import { ItemLehrerComponent } from './list-lehrer/item-lehrer/item-lehrer.component';
@NgModule({
declarations: [NeuerLehrerComponent,UpdateLehrerComponent, ListLehrerComponent, ItemLehrerComponent],
  imports: [
  GemeinsameInfosModule,
  EffectsModule.forRoot([LehrerEffects]),
      StoreModule.forFeature(LEHRER_STATE_NAME, lehrerReducer),
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
    LehrerRoutingModule
  ]
})
export class LehrerModule { }
