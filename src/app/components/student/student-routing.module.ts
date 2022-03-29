import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NeuerStudentComponent} from './neuer-student/neuer-student.component';
import {UpdateStudentComponent} from './update-student/update-student.component';
import {DetailsStudentComponent} from './details-student/details-student.component';
import {ListStudentComponent} from './list-student/list-student.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Student',
    },
    children: [

      {
        path: 'neuer-student',
        component: NeuerStudentComponent,
        data: {
          title: 'Neuer-Student',
        },
      },
         {
        path: 'liste-student',
        component: ListStudentComponent,
        data: {
          title: 'Liste-Student' }
          },
          {
          path: 'liste-student/details/:username',
          component:DetailsStudentComponent,
          data: {
                    title: 'Liste-Student/Details' }
          },
          {
           path: 'liste-student/update/:username',
            component:UpdateStudentComponent,
            data: {
            title: 'Liste-Student/Update' }
            },
             {
                       path: 'liste-student/delete/:username',
                        component:ListStudentComponent,
                        data: {
                        title: 'Liste-Student/Löschen' }
                        }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
