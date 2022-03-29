import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NeueBerechtigungComponent} from './neue-berechtigung/neue-berechtigung.component';
import {ListBerechtigungComponent} from './list-berechtigung/list-berechtigung.component';
import {UpdateBerechtigungComponent} from './update-berechtigung/update-berechtigung.component';
import {DetailsBerechtigungComponent} from './details-berechtigung/details-berechtigung.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Berechtigung',
    },
    children: [

      {
        path: 'neue-berechtigung',
        component: NeueBerechtigungComponent,
        data: {
          title: 'Neue-Berechtigung',
        },
      },
         {
        path: 'liste-berechtigungen',
        component: ListBerechtigungComponent,
        data: {
          title: 'Liste-Berechtigungen' }
          },
          {
          path: 'liste-berechtigungen/details/:codeBerechtigung',
          component:DetailsBerechtigungComponent,
          data: {
                    title: 'Liste-Berechtigungen/Details' }
          },
          {
           path: 'liste-berechtigungen/update/:codeBerechtigung',
            component:UpdateBerechtigungComponent,
            data: {
            title: 'Liste-Berechtigungen/Update' }
            },
             {
                       path: 'liste-berechtigungen/delete/:codeBerechtigung',
                        component:ListBerechtigungComponent,
                        data: {
                        title: 'Liste-Berechtigungen/Löschen' }
                        }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BerechtigungRoutingModule { }
