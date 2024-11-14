import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'EmployeeSkill', loadChildren: () => import('./EmployeeSkill/EmployeeSkill.module').then(m => m.EmployeeSkillModule) },
    
        { path: 'EmployeeTraining', loadChildren: () => import('./EmployeeTraining/EmployeeTraining.module').then(m => m.EmployeeTrainingModule) },
    
        { path: 'Skill', loadChildren: () => import('./Skill/Skill.module').then(m => m.SkillModule) },
    
        { path: 'SkillMatrix', loadChildren: () => import('./SkillMatrix/SkillMatrix.module').then(m => m.SkillMatrixModule) },
    
        { path: 'TrainingClass', loadChildren: () => import('./TrainingClass/TrainingClass.module').then(m => m.TrainingClassModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }