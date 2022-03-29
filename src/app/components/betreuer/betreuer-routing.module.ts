import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NeuerBetreuerComponent} from './neuer-betreuer/neuer-betreuer.component';
import {UpdateBetreuerComponent} from './update-betreuer/update-betreuer.component';
import {DetailsBetreuerComponent} from './details-betreuer/details-betreuer.component';
import {ListBetreuerComponent} from './list-betreuer/list-betreuer.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Betreuer',
    },
    children: [

      {
        path: 'neuer-betreuer',
        component: NeuerBetreuerComponent,
        data: {
          title: 'Neuer-Betreuer',
        },
      },
         {
        path: 'liste-betreuer',
        component: ListBetreuerComponent,
        data: {
          title: 'Liste-Betreuer' }
          },
          {
          path: 'liste-betreuer/details/:username',
          component:DetailsBetreuerComponent,
          data: {
                    title: 'Liste-Betreuer/Details' }
          },
          {
           path: 'liste-betreuer/update/:username',
            component:UpdateBetreuerComponent,
            data: {
            title: 'Liste-Betreuer/Update' }
            },
             {
                       path: 'liste-betreuer/delete/:username',
                        component:ListBetreuerComponent,
                        data: {
                        title: 'Liste-Betreuer/Löschen' }
                        }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetreuerRoutingModule { }
