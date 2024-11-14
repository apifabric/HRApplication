import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillMatrixHomeComponent } from './home/SkillMatrix-home.component';
import { SkillMatrixNewComponent } from './new/SkillMatrix-new.component';
import { SkillMatrixDetailComponent } from './detail/SkillMatrix-detail.component';

const routes: Routes = [
  {path: '', component: SkillMatrixHomeComponent},
  { path: 'new', component: SkillMatrixNewComponent },
  { path: ':id', component: SkillMatrixDetailComponent,
    data: {
      oPermission: {
        permissionId: 'SkillMatrix-detail-permissions'
      }
    }
  }
];

export const SKILLMATRIX_MODULE_DECLARATIONS = [
    SkillMatrixHomeComponent,
    SkillMatrixNewComponent,
    SkillMatrixDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillMatrixRoutingModule { }