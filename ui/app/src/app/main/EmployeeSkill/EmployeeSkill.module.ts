import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EMPLOYEESKILL_MODULE_DECLARATIONS, EmployeeSkillRoutingModule} from  './EmployeeSkill-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EmployeeSkillRoutingModule
  ],
  declarations: EMPLOYEESKILL_MODULE_DECLARATIONS,
  exports: EMPLOYEESKILL_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeSkillModule { }