import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Skill-card.component.html',
  styleUrls: ['./Skill-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Skill-card]': 'true'
  }
})

export class SkillCardComponent {


}