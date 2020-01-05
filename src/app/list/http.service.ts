import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';
import { Observable, of } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private router: Router, private http: HttpClient) { }
  // customers:any = [];
  notifications : Array = [];
  saveCustomer(data){
   var customers = []
   var list = JSON.parse(localStorage.getItem('customers'));
   console.log(list)
   if(list){
   	customers = list;
   	data.id = list.length+1
   	customers.push(data);
   }
   else{
   	data.id = 1;
   	customers[0] = data
   }
		localStorage.setItem("customers", JSON.stringify(customers));

		this.notificationAdd("Customer Added")

		this.router.navigate(['/customerlist']);
  	
  }

  getCustomers(): Observable<any>
	{  
		var customers = JSON.parse(localStorage.getItem('customers'));
   	return of(customers);
	}

	getCustomerInfo(id): Observable<any>
	{  
		var customers = JSON.parse(localStorage.getItem('customers'));
		var customerInfo;
		customers.forEach(function(customer) {
			if(customer.id==id){
		    	customerInfo = customer;
		    }
		});
		return customerInfo;
	}

	deleteCustomer(id){
		var customers = JSON.parse(localStorage.getItem('customers'));
		var customerInfo;
		customers.forEach(function(index,customer) {
			if(customer.id==id){
		    	  customers.splice(index, 1);
				}
		});
		localStorage.setItem("customers", JSON.stringify(customers));
	}

	notificationAdd(message){
		var check = JSON.parse(localStorage.getItem('notifications'));
		if(check){
			this.notifications = check;
		}
		this.notifications.push(message)
		localStorage.setItem("notifications", JSON.stringify(this.notifications));
	}


	// notificationCount(){
	// 	var notifications = JSON.parse(localStorage.getItem('notifications'));
	// 	if(notifications){
	// 		return this.notifications.length
	// 	}
	// }

}