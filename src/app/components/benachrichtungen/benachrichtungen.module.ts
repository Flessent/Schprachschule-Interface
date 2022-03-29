import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalComponent} from './modal/modal.component';
import { BenachrichtungenRoutingModule } from './benachrichtungen-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
        ModalModule.forRoot(),
    BenachrichtungenRoutingModule
  ],
  exports: [
  ModalComponent
  ]
})
export class BenachrichtungenModule { }
