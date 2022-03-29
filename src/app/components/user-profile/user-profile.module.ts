import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import {MatCardModule } from '@angular/material/card';
import {MatIconModule } from '@angular/material/icon';
import {MatDividerModule } from '@angular/material/divider';
import {MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [UserProfileComponent],
  imports: [
  MatCardModule,
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    UserProfileRoutingModule
  ]
})
export class UserProfileModule { }
