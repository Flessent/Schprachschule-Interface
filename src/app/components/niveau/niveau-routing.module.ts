import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NeuesNiveauComponent} from './neues-niveau/neues-niveau.component';
import {ListNiveauComponent} from './list-niveau/list-niveau.component';
import {DetailsNiveauComponent} from './details-niveau/details-niveau.component';
import {UpdateNiveauComponent} from './update-niveau/update-niveau.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Niveau',
    },
    children: [

      {
        path: 'neues-niveau',
        component: NeuesNiveauComponent,
        data: {
          title: 'Neues-Niveau',
        },
      },
         {
        path: 'liste-niveaus',
        component: ListNiveauComponent,
        data: {
          title: 'Liste-Niveau' }
          },
          {
          path: 'liste-niveaus/details/:codeNiveau',
          component:DetailsNiveauComponent,
          data: {
                    title: 'Liste-Niveau/Details' }
          },
          {
           path: 'liste-niveaus/update/:codeNiveau',
            component:UpdateNiveauComponent,
            data: {
            title: 'Liste-Niveau/Update' }
            },
             {
                       path: 'liste-niveau/delete/:codeNiveau',
                        component:ListNiveauComponent,
                        data: {
                        title: 'Liste-Niveau/Löschen' }
                        }
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NiveauRoutingModule { }
