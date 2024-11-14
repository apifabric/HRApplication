import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTrainingHomeComponent } from './home/EmployeeTraining-home.component';
import { EmployeeTrainingNewComponent } from './new/EmployeeTraining-new.component';
import { EmployeeTrainingDetailComponent } from './detail/EmployeeTraining-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeTrainingHomeComponent},
  { path: 'new', component: EmployeeTrainingNewComponent },
  { path: ':id', component: EmployeeTrainingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EmployeeTraining-detail-permissions'
      }
    }
  }
];

export const EMPLOYEETRAINING_MODULE_DECLARATIONS = [
    EmployeeTrainingHomeComponent,
    EmployeeTrainingNewComponent,
    EmployeeTrainingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeTrainingRoutingModule { }