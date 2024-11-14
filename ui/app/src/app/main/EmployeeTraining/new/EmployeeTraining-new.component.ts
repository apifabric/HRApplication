import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EmployeeTraining-new',
  templateUrl: './EmployeeTraining-new.component.html',
  styleUrls: ['./EmployeeTraining-new.component.scss']
})
export class EmployeeTrainingNewComponent {
  @ViewChild("EmployeeTrainingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}