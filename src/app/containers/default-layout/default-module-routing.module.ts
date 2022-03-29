import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from '../../components/user-profile/user-profile.component';
const routes: Routes = [


           {
          path: 'willkommen/user-profile/:username',
          component:UserProfileComponent,
          data: {
                    title: 'Liste-Verwalter/Details' }
          }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultModuleRoutingModule { }
