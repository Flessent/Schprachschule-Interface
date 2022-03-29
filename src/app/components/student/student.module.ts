import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
    import {MatInputModule} from '@angular/material/input';
    import { MatNativeDateModule } from '@angular/material/core';
    import {  MatSelectModule } from '@angular/material/select';
    import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StudentRoutingModule } from './student-routing.module';
    import { MatCardModule } from '@angular/material/card';
import {NeuerStudentComponent} from './neuer-student/neuer-student.component';
import {MatRippleModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {ItemStudentComponent} from './list-student/item-student/item-student.component';
import {ListStudentComponent} from './list-student/list-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {GemeinsameInfosModule} from '../personal/gemeinsame-infos/gemeinsame-infos.module';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import {StoreModule} from '@ngrx/store';

import {studentenReducer} from "../../ngrx/student/student.reducer";
import {EffectsModule} from "@ngrx/effects";
import {StudentenEffects} from "../../ngrx/student/student.effects";
import { STUDENT_STATE_NAME } from '../../ngrx/student/student.selector';
@NgModule({
  declarations: [NeuerStudentComponent,ItemStudentComponent,ListStudentComponent,UpdateStudentComponent],
  imports: [
GemeinsameInfosModule,


   EffectsModule.forRoot([StudentenEffects]),
  StoreModule.forFeature(STUDENT_STATE_NAME, studentenReducer),
  MatCardModule,MatGridListModule,
MatDatepickerModule,
    MatButtonModule,MatSelectModule,
      MatNativeDateModule,
      MatInputModule,
    CommonModule,MatIconModule,
ReactiveFormsModule,FormsModule,
    StudentRoutingModule,
    MatFormFieldModule,
NgxMatDatetimePickerModule,
      NgxMatTimepickerModule,
      NgxMatNativeDateModule,
    MatRippleModule
  ],
  providers: [
  MatDatepickerModule
  ]
})
export class StudentModule { }
