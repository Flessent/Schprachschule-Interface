import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NeuerVerwalterComponent} from './neuer-verwalter/neuer-verwalter.component';
import {UpdateVerwalterComponent} from './update-verwalter/update-verwalter.component';
import {DetailsVerwalterComponent} from './details-verwalter/details-verwalter.component';
import {ListVerwalterComponent} from './list-verwalter/list-verwalter.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Verwalter',
    },
    children: [

      {
        path: 'neuer-verwalter',
        component: NeuerVerwalterComponent,
        data: {
          title: 'Neuer-Verwalter',
        },
      },
         {
        path: 'liste-verwalter',
        component: ListVerwalterComponent,
        data: {
          title: 'Liste-Verwalter' }
          },
          {
          path: 'liste-verwalter/details/:codeVerwalter',
          component:DetailsVerwalterComponent,
          data: {
                    title: 'Liste-Verwalter/Details' }
          },
          {
           path: 'liste-verwalter/update/:codeVerwalter',
            component:UpdateVerwalterComponent,
            data: {
            title: 'Liste-Verwalter/Update' }
            },
             {
                       path: 'liste-verwalter/delete/:codeVerwalter',
                        component:ListVerwalterComponent,
                        data: {
                        title: 'Liste-Verwalter/Löschen' }
                        }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerwalterRoutingModule { }
