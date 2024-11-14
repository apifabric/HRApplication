import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EmployeeSkill-new',
  templateUrl: './EmployeeSkill-new.component.html',
  styleUrls: ['./EmployeeSkill-new.component.scss']
})
export class EmployeeSkillNewComponent {
  @ViewChild("EmployeeSkillForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}