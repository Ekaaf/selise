import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomeraddComponent } from './customeradd/customeradd.component';

// const routes: Routes = [];
const routes: Routes = [
  {
    path: 'customerlist',
    component: CustomerComponent
  },
  {
    path: 'customercreate',
    component: CustomeraddComponent
  },
  {
    path: 'customerlist/:id',
    component: CustomeraddComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
