import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
})
export class RadioComponent implements OnInit {
  @Input() control?: string;
  @Input() formGroup?: FormGroup;
  @Input() type?: string;
  @Input() option?: any[];
  @Input() label?: string;
  @Input() required?: boolean = false;
  @Input() validator?: any;

  constructor() {}

  ngOnInit(): void {}

  get controlName(): FormControl {
    return this.formGroup.get(this.control) as FormControl;
  }

  get hasError(): boolean {
    return (
      this.controlName.invalid &&
      (this.controlName.dirty || this.controlName.touched)
    );
  }

  get errorMessage(): string {
    const errors = this.controlName.errors;

    if (!errors) {
      return null;
    }

    if (errors['required']) {
      return `${this.label} is required`;
    }

    if (errors['email']) {
      return `${this.label} abc@gmail.com `;
    }

    if (errors['min']) {
      return `${this.label} mininum age is 1  `;
    }

    if (errors['max']) {
      return `${this.label} maximum age is 100`;
    }

    if (errors['minlength']) {
      return `${this.label} must be at least ${errors['minlength'].requiredLength} characters long`;
    }

    if (errors['maxlength']) {
      return `${this.label} must be no more than ${errors['maxlength'].requiredLength} characters long`;
    }

    if (errors['pattern']) {
      return `Invalid ${this.label}`;
    }

    return null;
  }
}
