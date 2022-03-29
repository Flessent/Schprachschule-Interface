import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import {NewUserComponent } from '../new-user/new-user.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'DrE-authentication' },
      { path: 'DrE-authentication', component: LoginComponent },
      { path: 'newUser', component: NewUserComponent },
    ],
  },
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
