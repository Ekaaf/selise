import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  notifications : number;
  ngOnInit() {
  	var Listnotifications = JSON.parse(localStorage.getItem('notifications'));
		if(Listnotifications){
			this.notifications = Listnotifications.length;
		}
		else{
			this.notifications = 0;
		}
  }

}
