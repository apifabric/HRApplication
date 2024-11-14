import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TRAININGCLASS_MODULE_DECLARATIONS, TrainingClassRoutingModule} from  './TrainingClass-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TrainingClassRoutingModule
  ],
  declarations: TRAININGCLASS_MODULE_DECLARATIONS,
  exports: TRAININGCLASS_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrainingClassModule { }