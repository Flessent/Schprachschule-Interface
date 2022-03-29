import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NeuerRaumComponent} from './neuer-raum/neuer-raum.component';
import {ListRaumComponent} from './list-raum/list-raum.component';
import {DetailsRaumComponent} from './details-raum/details-raum.component';
import {UpdateRaumComponent} from './update-raum/update-raum.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Raum',
    },
    children: [

      {
        path: 'neuer-raum',
        component: NeuerRaumComponent,
        data: {
          title: 'Neuer-Raum',
        },
      },
         {
        path: 'liste-raume',
        component: ListRaumComponent,
        data: {
          title: 'Liste-Raume' }
          },
          {
          path: 'liste-raume/details/:codeRaum',
          component:DetailsRaumComponent,
          data: {
                    title: 'Liste-Raume/Details' }
          },
          {
           path: 'liste-raume/update/:codeRaum',
            component:UpdateRaumComponent,
            data: {
            title: 'Liste-Raume/Update' }
            },
             {
                       path: 'liste-raume/delete/:codeRaum',
                        component:ListRaumComponent,
                        data: {
                        title: 'Liste-Raume/Löschen' }
                        }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaumeRoutingModule { }
