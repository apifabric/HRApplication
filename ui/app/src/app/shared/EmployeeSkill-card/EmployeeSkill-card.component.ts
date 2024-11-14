import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EmployeeSkill-card.component.html',
  styleUrls: ['./EmployeeSkill-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EmployeeSkill-card]': 'true'
  }
})

export class EmployeeSkillCardComponent {


}