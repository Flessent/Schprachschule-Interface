import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NeuerLehrerComponent} from './neuer-Lehrer/neuer-lehrer.component';
import {UpdateLehrerComponent} from './update-Lehrer/update-lehrer.component';
import { ListLehrerComponent } from './list-lehrer/list-lehrer.component';
import { ItemLehrerComponent } from './list-lehrer/item-lehrer/item-lehrer.component';
import {DetailsLehrerComponent} from './details-Lehrer/details-lehrer.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Lehrer',
    },
    children: [

      {
        path: 'neuer-lehrer',
        component: NeuerLehrerComponent,
        data: {
          title: 'Neuer-Lehrer',
        },
      },
         {
        path: 'liste-lehrer',
        component: ListLehrerComponent,
        data: {
          title: 'Liste-Lehrer' }
          },
          {
          path: 'liste-lehrer/details/:username',
          component:DetailsLehrerComponent,
          data: {
                    title: 'Liste-Lehrer/Details' }
          },
          {
           path: 'liste-lehrer/update/:username',
            component:UpdateLehrerComponent,
            data: {
            title: 'Liste-Lehrer/Update' }
            },
             {
                       path: 'liste-lehrer/delete/:username',
                        component:ListLehrerComponent,
                        data: {
                        title: 'Liste-Lehrer/Löschen' }
                        }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LehrerRoutingModule { }
