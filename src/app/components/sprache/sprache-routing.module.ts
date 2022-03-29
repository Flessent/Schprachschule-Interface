import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NeueSpracheComponent } from './neue-sprache/neue-sprache.component';
import { ListSpracheComponent } from  './list-sprache/list-sprache.component';
import {DetailsComponent} from './details/details.component';
import {UpdateSpracheComponent} from './update-sprache/update-sprache.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Sprache',
    },
    children: [

      {
        path: 'neue-sprache',
        component: NeueSpracheComponent,
        data: {
          title: 'Neue-Sprache',
        },
      },
         {
        path: 'liste-sprache',
        component: ListSpracheComponent,
        data: {
          title: 'Liste-Sprache' }
          },
          {
          path: 'liste-sprache/details/:codeSprache',
          component:DetailsComponent,
          data: {
                    title: 'Liste-Sprache/Details' }
          },
          {
           path: 'liste-sprache/update/:codeSprache',
            component:UpdateSpracheComponent,
            data: {
            title: 'Liste-Sprache/Update' }
            },
             {
                       path: 'liste-sprache/delete/:codeSprache',
                        component:ListSpracheComponent,
                        data: {
                        title: 'Liste-Sprache/Löschen' }
                        }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpracheRoutingModule {}

