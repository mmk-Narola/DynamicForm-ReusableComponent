import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicformJsonRoutingModule } from './dynamicform-json-routing.module';
import { DynamicFormJsonComponent } from './dynamic-form-json/dynamic-form-json.component';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { InputComponent } from '../components/input/input.component';
import { RadioComponent } from '../components/radio/radio.component';
import { SelectoptionComponent } from '../components/selectoption/selectoption.component';
import { TableComponent } from '../components/table/table.component';
import { TextareaComponent } from '../components/textarea/textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // DynamicFormJsonComponent,
    // InputComponent,
    // CheckboxComponent,
    // SelectoptionComponent,
    // RadioComponent,
    // TextareaComponent,
    // TableComponent,
  ],
  imports: [
    CommonModule,
    DynamicformJsonRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class DynamicformJsonModule {}
