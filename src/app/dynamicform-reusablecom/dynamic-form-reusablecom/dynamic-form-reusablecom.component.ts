import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { formFieldData } from 'src/assets/form-fields';

@Component({
  selector: 'app-dynamic-form-reusablecom',
  templateUrl: './dynamic-form-reusablecom.component.html',
  styleUrls: ['./dynamic-form-reusablecom.component.scss'],
})
export class DynamicFormReusablecomComponent implements OnInit {
  formField = formFieldData;
  reusableComDyanicform: FormGroup;
  isSubmiit = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`http://192.168.100.89:4002/api/country`)
      .subscribe((res: any) => {
        this.formField.forEach((ele) => {
          if (ele.name == 'country') {
            ele.options = res.country;
          }
        });
      });

    this.reusableComDyanicform = this.formControl();
  }

  formControl() {
    const group = this.fb.group({});
    this.formField.forEach((field) => {
      const control = this.fb.control(
        '',
        this.validators(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  validators(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach((valid) => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  onSelectionChange(value: any, label: string) {
    if (label === 'country' && value) {
      this.http
        .get(`http://192.168.100.89:4002/api/states/${value}`)
        .subscribe((res: any) => {
          console.log(res);
          this.formField.forEach((ele) => {
            if (ele.name === 'state') {
              ele.options = res.states;
            }
          });
        });
    } else if (label === 'state' && value) {
      this.http
        .get(`http://192.168.100.89:4002/api/city/${value}`)
        .subscribe((res: any) => {
          console.log(res);
          this.formField.forEach((ele) => {
            if (ele.name === 'city') {
              ele.options = res.city;
            }
          });
        });
    } else {
      console.log('Error');
    }
  }

  ngSubmit() {
    this.isSubmiit = true;
    if (this.reusableComDyanicform.invalid) {
      return;
    }
    console.log(this.reusableComDyanicform.value);
  }
}
