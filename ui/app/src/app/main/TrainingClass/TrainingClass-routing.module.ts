import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingClassHomeComponent } from './home/TrainingClass-home.component';
import { TrainingClassNewComponent } from './new/TrainingClass-new.component';
import { TrainingClassDetailComponent } from './detail/TrainingClass-detail.component';

const routes: Routes = [
  {path: '', component: TrainingClassHomeComponent},
  { path: 'new', component: TrainingClassNewComponent },
  { path: ':id', component: TrainingClassDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TrainingClass-detail-permissions'
      }
    }
  },{
    path: ':training_class_id/EmployeeTraining', loadChildren: () => import('../EmployeeTraining/EmployeeTraining.module').then(m => m.EmployeeTrainingModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeTraining-detail-permissions'
        }
    }
},{
    path: ':training_class_id/SkillMatrix', loadChildren: () => import('../SkillMatrix/SkillMatrix.module').then(m => m.SkillMatrixModule),
    data: {
        oPermission: {
            permissionId: 'SkillMatrix-detail-permissions'
        }
    }
}
];

export const TRAININGCLASS_MODULE_DECLARATIONS = [
    TrainingClassHomeComponent,
    TrainingClassNewComponent,
    TrainingClassDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingClassRoutingModule { }