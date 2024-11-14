import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EMPLOYEETRAINING_MODULE_DECLARATIONS, EmployeeTrainingRoutingModule} from  './EmployeeTraining-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EmployeeTrainingRoutingModule
  ],
  declarations: EMPLOYEETRAINING_MODULE_DECLARATIONS,
  exports: EMPLOYEETRAINING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeTrainingModule { }