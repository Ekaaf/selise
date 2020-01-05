import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }
  notifications : Array
  ngOnInit() {
  	this.notifications = JSON.parse(localStorage.getItem('notifications'));
  	this.notifications = []
  	localStorage.setItem("notifications", JSON.stringify(this.notifications));
  }

}
