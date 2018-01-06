import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    profile:any;
    user = {};

    constructor() {
    }

    checkForLogin() {
      let user = firebase.auth().currentUser;
      if(user != null)
        this.user = user;
        return true;
    }
}
