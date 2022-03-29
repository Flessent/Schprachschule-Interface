import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NeuerSekretaerComponent} from './neuer-sekretaer/neuer-sekretaer.component';
import {UpdateSekretaerComponent} from './update-sekretaer/update-sekretaer.component';
import {DetailsSekretaerComponent} from './details-sekretaer/details-sekretaer.component';
import {ListSekretaerComponent} from './list-sekretaer/list-sekretaer.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sekretaer',
    },
    children: [

      {
        path: 'neuer-sekretaer',
        component: NeuerSekretaerComponent,
        data: {
          title: 'Neuer-sekretaer',
        },
      },
         {
        path: 'liste-sekretaer',
        component: ListSekretaerComponent,
        data: {
          title: 'Liste-Sekretaer' }
          },
          {
          path: 'liste-sekretaer/details/:username',
          component:DetailsSekretaerComponent,
          data: {
                    title: 'Liste-Sekretaer/Details' }
          },
          {
           path: 'liste-sekretaer/update/:username',
            component:UpdateSekretaerComponent,
            data: {
            title: 'Liste-Sekretaer/Update' }
            },
             {
                       path: 'liste-sekretaer/delete/:username',
                        component:ListSekretaerComponent,
                        data: {
                        title: 'Liste-Sekretaer/Löschen' }
                        }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SekretaerRoutingModule { }
