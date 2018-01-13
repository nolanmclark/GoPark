import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth, private router: Router) {
    firebase.auth().onAuthStateChanged((auth) => {
      if(auth) {
        this.router.navigateByUrl('/profile');
      }
    });
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      let email = formData.value.email;
      let password = formData.value.password;
      this.af.auth.signInWithEmailAndPassword(email, password).then((success) => {
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
