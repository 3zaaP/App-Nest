import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content-form',
  templateUrl: './content-form.component.html',
  styleUrls: ['./content-form.component.css']
})
export class ContentFormComponent {
  @Input() form!: FormGroup; // Input for the form group
  @Input() subjects!: any[]; // Input for subjects data
  @Output() submit = new EventEmitter<any>(); // Output event for form submission

  constructor() { }

  // emits the form data using the submit event
  onSubmit() {
    // Emit form data on submit
    this.submit.emit(this.form.value);
  }
  cancelForm() {
    this.form.reset();
  }
}