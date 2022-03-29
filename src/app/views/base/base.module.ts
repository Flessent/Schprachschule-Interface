import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// CoreUI Modules
import {
  AccordionModule,
  BadgeModule,

  UtilitiesModule,
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

// utils
import { ComponentsModule } from '../../../components/components.module';

// views
import { AccordionsComponent } from './accordion/accordions.component';


// Components Routing
import { BaseRoutingModule } from './base-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
    AccordionModule,

    ComponentsModule,
  ],
  declarations: [
    AccordionsComponent,

  ],
})
export class BaseModule {}
