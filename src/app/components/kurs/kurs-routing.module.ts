import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NeuerKursComponent} from './neuer-kurs/neuer-kurs.component';
import {ListKursComponent} from './list-kurs/list-kurs.component';
import {DetailsKursComponent} from './details-kurs/details-kurs.component';
import {UpdateKursComponent} from './update-kurs/update-kurs.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Kurs',
    },
    children: [

      {
        path: 'neuer-kurs',
        component: NeuerKursComponent,
        data: {
          title: 'Neuer-Kurs',
        },
      },
         {
        path: 'liste-kurse',
        component: ListKursComponent,
        data: {
          title: 'Liste-Kurs' }
          },
          {
          path: 'liste-kurse/details/:codeKurs',
          component:DetailsKursComponent,
          data: {
                    title: 'Liste-Kurs/Details' }
          },
          {
           path: 'liste-kurse/update/:codeKurs',
            component:UpdateKursComponent,
            data: {
            title: 'Liste-Kurs/Update' }
            },
             {
                       path: 'liste-kurs/delete/:codeKurs',
                        component:ListKursComponent,
                        data: {
                        title: 'Liste-Kurs/Löschen' }
                        }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KursRoutingModule { }
