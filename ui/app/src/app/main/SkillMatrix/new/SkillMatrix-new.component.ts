import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'SkillMatrix-new',
  templateUrl: './SkillMatrix-new.component.html',
  styleUrls: ['./SkillMatrix-new.component.scss']
})
export class SkillMatrixNewComponent {
  @ViewChild("SkillMatrixForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}