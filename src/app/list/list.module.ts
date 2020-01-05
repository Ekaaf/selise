import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomeraddComponent } from './customeradd/customeradd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [CustomerComponent, CustomeraddComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ListModule { }
