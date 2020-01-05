import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationserviceService {

  constructor() { }

  myMethod() {
    return console.log('Hey, what is up!');
  }
}
