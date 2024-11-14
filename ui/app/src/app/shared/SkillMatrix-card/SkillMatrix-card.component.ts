import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SkillMatrix-card.component.html',
  styleUrls: ['./SkillMatrix-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SkillMatrix-card]': 'true'
  }
})

export class SkillMatrixCardComponent {


}