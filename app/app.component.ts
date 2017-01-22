import { Component } from '@angular/core';
import { Auth } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  { 
profile: any;

openNav(event:any): void {
  var container = document.querySelector('#wrapper');
  container.classList.toggle('toggled');
}

navSelect(event:any): void {
  var active = document.querySelector(".active"); 
  active.classList.remove("active");

  var selection = document.querySelector(event.target);
  selection.classList.add('active');
}

constructor(private auth: Auth) {
        this.profile = JSON.parse(localStorage.getItem('profile'));
    }
}
