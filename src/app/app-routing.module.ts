import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormJsonComponent } from './dynamicform-json/dynamic-form-json/dynamic-form-json.component';
import { DynamicFormReusablecomComponent } from './dynamicform-reusablecom/dynamic-form-reusablecom/dynamic-form-reusablecom.component';

const routes: Routes = [
  {
    path: 'dynamicform-json',
    component: DynamicFormJsonComponent,
  },
  { path: 'reusablecom-form', component: DynamicFormReusablecomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
