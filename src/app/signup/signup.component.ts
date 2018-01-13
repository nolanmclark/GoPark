import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import {UserService} from '../userService/userService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    state: string = '';
    error: any;

    constructor(private userService: UserService, public af: AngularFireAuth ,private router: Router) {

    }

    async onSubmit(formData) {
      if(formData.valid) {
        console.log(formData.value);
        let email = formData.value.email;
        let password = formData.value.password;
        let newuser = {
          password: password,
          email: email
        }
        await this.userService.addUser(newuser).then((success) => {
          console.log(success);
          this.router.navigate(['/profile']);
        }).catch(
          (err) => {
          console.log(err);
          this.error = err;
        })
      }
    }
  }
