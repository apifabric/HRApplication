import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TrainingClass-new',
  templateUrl: './TrainingClass-new.component.html',
  styleUrls: ['./TrainingClass-new.component.scss']
})
export class TrainingClassNewComponent {
  @ViewChild("TrainingClassForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}