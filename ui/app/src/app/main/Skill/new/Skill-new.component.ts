import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Skill-new',
  templateUrl: './Skill-new.component.html',
  styleUrls: ['./Skill-new.component.scss']
})
export class SkillNewComponent {
  @ViewChild("SkillForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}