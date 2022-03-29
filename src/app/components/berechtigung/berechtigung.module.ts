import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {rolesReducer} from '../../ngrx/roles/roles.reducer';
import {ROLES_STATE_NAME} from '../../ngrx/roles/roles.selector';
import {StoreModule} from '@ngrx/store';
import {RolesEffects} from '../../ngrx/roles/roles.effect';
import {EffectsModule} from '@ngrx/effects';
import { BerechtigungRoutingModule } from './berechtigung-routing.module';
import { NeueBerechtigungComponent } from './neue-berechtigung/neue-berechtigung.component';
import { UpdateBerechtigungComponent } from './update-berechtigung/update-berechtigung.component';
import { ListBerechtigungComponent } from './list-berechtigung/list-berechtigung.component';
import { ItemBerechtigungComponent } from './list-berechtigung/item-berechtigung/item-berechtigung.component';
import { DetailsBerechtigungComponent } from './details-berechtigung/details-berechtigung.component';


@NgModule({
  declarations: [
    NeueBerechtigungComponent,
    UpdateBerechtigungComponent,
    ListBerechtigungComponent,
    ItemBerechtigungComponent,
    DetailsBerechtigungComponent
  ],
  imports: [
  ReactiveFormsModule,FormsModule,
  StoreModule.forFeature(ROLES_STATE_NAME,rolesReducer),
  EffectsModule.forRoot([RolesEffects]),
    CommonModule,
    BerechtigungRoutingModule
  ]
})
export class BerechtigungModule { }
