import { Component, OnInit } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router'
import {NgZone, Renderer, ElementRef, ViewChild} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import {UserService} from './userService/userService';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Profile} from './models/profile';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

profile: any;

@ViewChild('spinnerElement')
spinnerElement: ElementRef
isSignedIn: any;
user: any = {};
userProfile: AngularFirestoreCollection<Profile>;


constructor(public userService: UserService, public afAuth: AngularFireAuth, private router: Router, private ngZone: NgZone, private renderer: Renderer, private http: Http) {
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event);
      this.checkForLogin();
    })
}

async ngOnInit() {
  await this.checkForLogin();
  if(this.isSignedIn === true) {
    await this.getUserDetails();
  }
}

checkForLogin() {
  let user = firebase.auth().currentUser;
  if(user != null) {
    this.user = user;
    this.isSignedIn = true;
    return;
  } else {
    this.isSignedIn = false;
  }
}

getUserDetails() {
  const ref: Observable<Profile> = this.userService.getUserDetails();
    ref.subscribe(res => {
      this.user.fullName = res.fullName;
      this.user.avatar = res.photoURL;
      this.user.favoritesList = res.favorites;
    })
}

logout() {
  firebase.auth().signOut().then(() => {
    this.router.navigateByUrl('');
    this.isSignedIn = false;
    this.user = {};
  })
}

private _navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.ngZone.runOutsideAngular(() => {
        this.renderer.setElementStyle(
          this.spinnerElement.nativeElement,
          'opacity',
          '1'
        )
      })
    }

    if (event instanceof NavigationEnd) {
      this._hideSpinner()
    }
    if (event instanceof NavigationCancel) {
      this._hideSpinner()
    }
    if (event instanceof NavigationError) {
      this._hideSpinner()
    }
}

private _hideSpinner(): void {
    this.ngZone.runOutsideAngular(() => {
      this.renderer.setElementStyle(
        this.spinnerElement.nativeElement,
        'opacity',
        '0'
      )
  })
}


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
}
