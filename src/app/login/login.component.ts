import { Component, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {UserService} from '../userService/userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: any;
  userData: any;

  constructor(private userService: UserService, public af: AngularFireAuth ,private router: Router) {

  }


  loginFb() {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((res) => {
      console.log(res);
      const cred = firebase.auth.FacebookAuthProvider.credential(res.credential.accessToken);
      if(cred) {
        this.af.auth.signInWithCredential(cred).then((resp: any) => {
          this.userData = {
            uid: resp.uid,
            email: resp.email,
            fullName: resp.displayName,
            photoURL: resp.photoURL
          };
          var docRef = firebase.firestore().collection("users").doc(this.userData.uid);
              docRef.get().then((doc) => {
                  if (doc.exists) {
                     window.localStorage.setItem('currentuser', JSON.stringify(this.userData));
                     this.router.navigate(['/profile']);
                   } else {
                     this.userService.addFacebookUser(this.userData).then((response: any) => {
                       if(response) {
                         window.localStorage.setItem('currentuser', JSON.stringify(this.userData));
                         this.router.navigate(['/profile']);
                       } else {
                         alert("ERROR:" + response);
                       }
                     }).catch((err) => {
                       alert("ERROR ERROR ERROR " + err);
                     });
                   }
                 }).catch((error) => {
                   alert("Error fetching document " + error);
                 });
            }).catch((err) => {
                 alert(err);
          })
      }
    });
  }

  loginGoogle() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res) => {
      console.log(res);
      const cred = firebase.auth.GoogleAuthProvider.credential(res.credential.accessToken);
      if(cred) {
        this.af.auth.signInWithCredential(cred).then((resp: any) => {
          this.userData = {
            uid: resp.uid,
            email: resp.email,
            fullName: resp.displayName,
            photoURL: resp.photoURL
          };
          var docRef = firebase.firestore().collection("users").doc(this.userData.uid);
              docRef.get().then((doc) => {
                  if (doc.exists) {
                     window.localStorage.setItem('currentuser', JSON.stringify(this.userData));
                     this.router.navigate(['/profile']);
                   } else {
                     this.userService.addFacebookUser(this.userData).then((response: any) => {
                       if(response) {
                         window.localStorage.setItem('currentuser', JSON.stringify(this.userData));
                         this.router.navigate(['/profile']);
                       } else {
                         alert("ERROR:" + response);
                       }
                     }).catch((err) => {
                       alert("ERROR ERROR ERROR " + err);
                     });
                   }
                 }).catch((error) => {
                   alert("Error fetching document " + error);
                 });
            }).catch((err) => {
                 alert(err);
          })
      }
    })
}
}
