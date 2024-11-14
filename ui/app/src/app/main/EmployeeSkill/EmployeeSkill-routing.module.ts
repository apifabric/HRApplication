import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSkillHomeComponent } from './home/EmployeeSkill-home.component';
import { EmployeeSkillNewComponent } from './new/EmployeeSkill-new.component';
import { EmployeeSkillDetailComponent } from './detail/EmployeeSkill-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeSkillHomeComponent},
  { path: 'new', component: EmployeeSkillNewComponent },
  { path: ':id', component: EmployeeSkillDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EmployeeSkill-detail-permissions'
      }
    }
  }
];

export const EMPLOYEESKILL_MODULE_DECLARATIONS = [
    EmployeeSkillHomeComponent,
    EmployeeSkillNewComponent,
    EmployeeSkillDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeSkillRoutingModule { }