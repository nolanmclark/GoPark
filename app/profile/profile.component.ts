import { Component } from '@angular/core';
import { Auth } from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent  {
    userProfile:any;

    constructor(private auth: Auth){
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
 }
