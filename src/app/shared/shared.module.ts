import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../components/checkbox/checkbox.component';
import { InputComponent } from '../components/input/input.component';
import { RadioComponent } from '../components/radio/radio.component';
import { SelectoptionComponent } from '../components/selectoption/selectoption.component';
import { TextareaComponent } from '../components/textarea/textarea.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    SelectoptionComponent,
    RadioComponent,
    TextareaComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [
    InputComponent,
    CheckboxComponent,
    SelectoptionComponent,
    RadioComponent,
    TextareaComponent,
  ],
})
export class SharedModule {}
