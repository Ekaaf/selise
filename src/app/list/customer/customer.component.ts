import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

	customers: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
  	
  	this._http.getCustomers().subscribe(data => {
      this.customers = data;
      setTimeout(function(){ 
      	$('#customerTable').DataTable({
		  		"pageLength": 5
		  	});
		  	$("#customerTable tbody").show();
    	}, 500);
      
		});
  	
  }

  deleteCustomer(id){
  	if(confirm("Are you sure you want to delete this?")){
        this._http.deleteCustomer(id);
        this._http.getCustomers().subscribe(data => {
		      this.customers = data;
		      setTimeout(function(){ 
		      	$('#customerTable').DataTable({
				  		"pageLength": 5
				  	});
				  	$("#customerTable tbody").show();
		    	}, 500);
		      
				});
    }
    else{
        return false;
    }
  	
  }

}
