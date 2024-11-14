import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EmployeeTraining-card.component.html',
  styleUrls: ['./EmployeeTraining-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EmployeeTraining-card]': 'true'
  }
})

export class EmployeeTrainingCardComponent {


}