import { NgModule } from '@angular/core';
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
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from '@ngrx/store';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';

import { GemeinsameInfosRoutingModule } from './gemeinsame-infos-routing.module';
import { GemeinsameInfosComponent } from './gemeinsame-infos.component';
import { VonUpdatePersonneComponent } from './von-update-personne/von-update-personne.component';
import { NeuePersonneComponent } from './neue-personne/neue-personne.component';


@NgModule({
  declarations: [GemeinsameInfosComponent, VonUpdatePersonneComponent, NeuePersonneComponent],
  imports: [
    CommonModule,
    GemeinsameInfosRoutingModule,
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
  ],
  exports:[
  NeuePersonneComponent,
  VonUpdatePersonneComponent,
  GemeinsameInfosComponent
  ]
})
export class GemeinsameInfosModule { }
