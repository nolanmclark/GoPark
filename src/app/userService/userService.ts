import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { Observable, Observer } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import * as firebase from 'firebase';
import { Profile } from '../models/profile';
import { User } from '../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class UserService {

  firedata = firebase.firestore().collection('users');
  user: Observable<Profile>;

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth, public router: Router, private http: Http) {

  }

  getUserDetails():any {
    const userRef: AngularFirestoreDocument<Profile> = this.afs.doc(`users/${firebase.auth().currentUser.uid}`);
    const doc: Observable<Profile> = userRef.valueChanges();
    return doc;
  }

  addRemFavorites(favorites) {
    this.firedata.doc(firebase.auth().currentUser.uid).update({favorites: favorites});
  }

  addFacebookUser(newuser: any) {
    var promise = new Promise((resolve, reject) => {
      this.firedata.doc(this.afAuth.auth.currentUser.uid).set({
            uid: this.afAuth.auth.currentUser.uid,
            fullName: newuser.fullName,
            photoURL: newuser.photoURL,
            email: newuser.email,
            favorites: {},
          }).then(() => {
            resolve(true);
          }).catch((err) => {
            reject(err);
        });
    });
    return promise;
  }

  login(credentials: User) {
    var promise = new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(() => {
        resolve(true);
      }).catch((err) => {
        reject(err);
       })
    })
    return promise;
  }

  addUser(newuser) {
    var promise = new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(() => {
        this.afAuth.auth.currentUser.updateProfile({
          displayName: newuser.email,
          photoURL: ''
        }).then(() => {
          this.firedata.doc(this.afAuth.auth.currentUser.uid).set({
            uid: this.afAuth.auth.currentUser.uid,
            fullName: newuser.email,
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e',
            email: newuser.email,
            favorites: {},
          }).then(() => {
            resolve({success: true});
          }).catch((err) => {
            reject(err);
          })
        }).catch((err) => {
          reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }
}
