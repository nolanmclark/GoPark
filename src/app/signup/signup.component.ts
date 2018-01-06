import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  state: string = '';
    error: any;

    constructor(public af: AngularFireAuth ,private router: Router) {

    }

    onSubmit(formData) {
      if(formData.valid) {
        console.log(formData.value);
        let email = formData.value.email;
        let password = formData.value.password;
        this.af.auth.createUserWithEmailAndPassword(email, password)
        .then(
          (success) => {
          console.log(success);
          this.router.navigate(['/login'])
        }).catch(
          (err) => {
          console.log(err);
          this.error = err;
        })
      }
    }
}
