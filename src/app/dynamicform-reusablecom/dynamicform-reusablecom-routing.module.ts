import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormReusablecomComponent } from './dynamic-form-reusablecom/dynamic-form-reusablecom.component';

const routes: Routes = [
  { path: '', component: DynamicFormReusablecomComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicformReusablecomRoutingModule {}
