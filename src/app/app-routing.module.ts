import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormJsonComponent } from './dynamicform-json/dynamic-form-json/dynamic-form-json.component';
import { DynamicFormReusablecomComponent } from './dynamicform-reusablecom/dynamic-form-reusablecom/dynamic-form-reusablecom.component';
import { ReusableTableComponentComponent } from './reusable-table-component/reusable-table-component.component';

const routes: Routes = [
  {
    path: 'dynamicform-json',
    loadChildren: () =>
      import('./dynamicform-json/dynamicform-json.module').then(
        (m) => m.DynamicformJsonModule
      ),
  },
  {
    path: 'reusablecom-form',
    loadChildren: () =>
      import('./dynamicform-reusablecom/dynamicform-reusablecom.module').then(
        (m) => m.DynamicformReusablecomModule
      ),
  },
  {
    path: 'reusable-table-component',
    component: ReusableTableComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
