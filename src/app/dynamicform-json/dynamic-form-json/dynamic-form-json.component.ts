import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FieldJSON } from 'src/app/constants/form-field-json';

@Component({
  selector: 'app-dynamic-form-json',
  templateUrl: './dynamic-form-json.component.html',
  styleUrls: ['./dynamic-form-json.component.scss'],
})
export class DynamicFormJsonComponent implements OnInit {
  formFields: FieldJSON[] = [];
  dynamicForm = this.fb.group({});
  constructor(private httpService: HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getDynamicFormField();
  }

  getDynamicFormField() {
    //getting form data from josn file
    this.httpService
      .get('../../../assets/form-field.json')
      .subscribe((res: FieldJSON) => {
        this.formFields = res.data;
        this.setDynamicFormControl(res.data);

        //set api country data in formFields
        this.httpService
          .get(`http://192.168.100.89:4002/api/country`)
          .subscribe((res: any) => {
            this.formFields?.forEach((ele) => {
              if (ele.name == 'country') {
                ele.options = res.country;
              }
            });
          });
      });
  }

  setDynamicFormControl(controls: FieldJSON[]) {
    for (const control of controls) {
      const validators = [];

      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validators.push(Validators.min(value));
            break;

          case 'max':
            validators.push(Validators.max(value));
            break;

          case 'required':
            if (value) {
              validators.push(Validators.required);
            }
            break;

          case 'requiredTrue':
            if (value) {
              validators.push(Validators.requiredTrue);
            }
            break;

          case 'email':
            if (value) {
              validators.push(Validators.email);
            }
            break;

          case 'minLength':
            validators.push(Validators.minLength(value));
            break;

          case 'maxLength':
            validators.push(Validators.maxLength(value));
            break;

          case 'pattern':
            validators.push(Validators.pattern(value));
            break;

          case 'nullValidator':
            if (value) {
              validators.push(Validators.nullValidator);
            }
            break;

          default:
            break;
        }
      }

      this.dynamicForm.addControl(
        control.name,
        this.fb.control(control.value, validators)
      );
    }
  }

  onSelectionChange(value: any, label: string) {
    if (label === 'country' && value) {
      this.httpService
        .get(`http://192.168.100.89:4002/api/states/${value}`)
        .subscribe((res: any) => {
          this.formFields.forEach((ele) => {
            if (ele.name === 'state') {
              ele.options = res.states;
            }
          });
        });
    } else if (label === 'state' && value) {
      this.httpService
        .get(`http://192.168.100.89:4002/api/city/${value}`)
        .subscribe((res: any) => {
          this.formFields.forEach((ele) => {
            if (ele.name === 'city') {
              ele.options = res.city;
            }
          });
        });
    } else {
      console.log('Error');
    }
  }

  onSubmit() {
    if (this.dynamicForm.invalid) {
      return;
    }
    console.log(this.dynamicForm.value);
  }
}
