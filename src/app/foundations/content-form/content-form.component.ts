import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent {
  @Input() form!: FormGroup;
  @Input() subjects!: any[];
  @Output() submit = new EventEmitter<any>();

  constructor() { }

  onSubmit() {
    // Emit form data on submit
    this.submit.emit(this.form.value);
    console.log(this.form.value);

  }
  cancelForm() {
    this.form.reset();
  }
}