import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {
	customerForm: FormGroup;
  submitted = false;
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private _http: HttpService) { }
  brews: Object;
  ngOnInit() {

  	this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
    	

  	this.customerForm = this.formBuilder.group({
        customerName: ['', Validators.required],
       	customerEmail: ['', [Validators.required, Validators.email]],
       	gender: ['', Validators.required],
       	customerPhone: ['', [Validators.required, Validators.minLength(6111)]],
    });

    if(this.id){
    		var customerInfo = this._http.getCustomerInfo(this.id);
    		this.customerForm.setValue({
				  customerName: customerInfo.customerName, 
				  customerEmail: customerInfo.customerEmail,
				  gender: customerInfo.gender,
				  customerPhone: customerInfo.customerPhone
				});
    }

  }
  get f() { return this.customerForm.controls; }
  onSubmit() {
	  this.submitted = true;
    this._http.saveCustomer(this.customerForm.value);
	}

	onReset() {
      this.submitted = false;
      this.customerForm.reset();
  }

}
