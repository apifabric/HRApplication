import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './home/Employee-home.component';
import { EmployeeNewComponent } from './new/Employee-new.component';
import { EmployeeDetailComponent } from './detail/Employee-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeHomeComponent},
  { path: 'new', component: EmployeeNewComponent },
  { path: ':id', component: EmployeeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Employee-detail-permissions'
      }
    }
  },{
    path: ':employee_id/EmployeeSkill', loadChildren: () => import('../EmployeeSkill/EmployeeSkill.module').then(m => m.EmployeeSkillModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeSkill-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeTraining', loadChildren: () => import('../EmployeeTraining/EmployeeTraining.module').then(m => m.EmployeeTrainingModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeTraining-detail-permissions'
        }
    }
}
];

export const EMPLOYEE_MODULE_DECLARATIONS = [
    EmployeeHomeComponent,
    EmployeeNewComponent,
    EmployeeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }