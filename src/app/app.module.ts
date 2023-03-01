import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SelectoptionComponent } from './components/selectoption/selectoption.component';
import { RadioComponent } from './components/radio/radio.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormReusablecomComponent } from './dynamicform-reusablecom/dynamic-form-reusablecom/dynamic-form-reusablecom.component';
import { DynamicFormJsonComponent } from './dynamicform-json/dynamic-form-json/dynamic-form-json.component';
import { ReusableTableComponentComponent } from './reusable-table-component/reusable-table-component.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DynamicFormJsonComponent,
    DynamicFormReusablecomComponent,
    ReusableTableComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
