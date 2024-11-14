import { MenuRootItem } from 'ontimize-web-ngx';

import { EmployeeCardComponent } from './Employee-card/Employee-card.component';

import { EmployeeSkillCardComponent } from './EmployeeSkill-card/EmployeeSkill-card.component';

import { EmployeeTrainingCardComponent } from './EmployeeTraining-card/EmployeeTraining-card.component';

import { SkillCardComponent } from './Skill-card/Skill-card.component';

import { SkillMatrixCardComponent } from './SkillMatrix-card/SkillMatrix-card.component';

import { TrainingClassCardComponent } from './TrainingClass-card/TrainingClass-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Employee', name: 'EMPLOYEE', icon: 'view_list', route: '/main/Employee' }
    
        ,{ id: 'EmployeeSkill', name: 'EMPLOYEESKILL', icon: 'view_list', route: '/main/EmployeeSkill' }
    
        ,{ id: 'EmployeeTraining', name: 'EMPLOYEETRAINING', icon: 'view_list', route: '/main/EmployeeTraining' }
    
        ,{ id: 'Skill', name: 'SKILL', icon: 'view_list', route: '/main/Skill' }
    
        ,{ id: 'SkillMatrix', name: 'SKILLMATRIX', icon: 'view_list', route: '/main/SkillMatrix' }
    
        ,{ id: 'TrainingClass', name: 'TRAININGCLASS', icon: 'view_list', route: '/main/TrainingClass' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    EmployeeCardComponent

    ,EmployeeSkillCardComponent

    ,EmployeeTrainingCardComponent

    ,SkillCardComponent

    ,SkillMatrixCardComponent

    ,TrainingClassCardComponent

];