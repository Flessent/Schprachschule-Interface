import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from './user-profile.component';
const routes: Routes = [
{
    path: '',
    data: {
      title: 'User-Profile',
    },
    children: [

      {
        path: ':username',
        component: UserProfileComponent,
        data: {
          title: 'User-Profile',
        }

      }
      ]
      }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
