import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NeuerLeiterComponent} from './neuer-leiter/neuer-leiter.component';
import {UpdateLeiterComponent} from './update-leiter/update-leiter.component';
import {DetailsLeiterComponent} from './details-leiter/details-leiter.component';
import {ListLeiterComponent} from './list-leiter/list-leiter.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Leiter',
    },
    children: [

      {
        path: 'neuer-leiter',
        component: NeuerLeiterComponent,
        data: {
          title: 'Neuer-Leiter',
        },
      },
         {
        path: 'liste-leiter',
        component: ListLeiterComponent,
        data: {
          title: 'Liste-Leiter' }
          },
          {
          path: 'liste-leiter/details/:codeLeiter',
          component:DetailsLeiterComponent,
          data: {
                    title: 'Liste-Leiter/Details' }
          },
          {
           path: 'liste-leiter/update/:codeLeiter',
            component:UpdateLeiterComponent,
            data: {
            title: 'Liste-Leiter/Update' }
            },
             {
                       path: 'liste-leiter/delete/:codeLeiter',
                        component:ListLeiterComponent,
                        data: {
                        title: 'Liste-Leiter/Löschen' }
                        }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeiterRoutingModule { }
