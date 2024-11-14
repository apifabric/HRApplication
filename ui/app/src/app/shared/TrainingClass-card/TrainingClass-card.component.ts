import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TrainingClass-card.component.html',
  styleUrls: ['./TrainingClass-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TrainingClass-card]': 'true'
  }
})

export class TrainingClassCardComponent {


}