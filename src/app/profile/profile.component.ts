import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Profile} from '../models/profile';
import { UserService } from '../userService/userService';
import { parkService } from '../parkService/parkService.service';
import { Data } from '../providers/data/data';
import { Router, NavigationExtras, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    profile:any;
    noFavorites: boolean = true;
    user = {};
    favoritesList = [];
    favorites = [];
    isSignedIn: any;

    constructor(private router: Router, private data: Data, private parkService: parkService, private userService: UserService) {
      this.checkForLogin()
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

    getUserDetails():any {
        const ref: Observable<Profile> = this.userService.getUserDetails();
        ref.subscribe(res => {
          this.favoritesList = res.favorites;
          this.checkEmpty();
          for(let key in this.favoritesList) {
            let fav = this.parkService.searchByParkCode(key);
            fav.subscribe(data => {
                console.log(data);
                this.favorites.push(data.data[0]);
            })
          }
          console.log(this.favoritesList);
        });
      }

    checkEmpty() {
        let len = Object.keys(this.favoritesList).length;
        console.log("checking" + len);
        if(len == 0) {
          this.noFavorites = true;
          this.favoritesList = [];
        } else {
          this.noFavorites = false;
        }
      }

      search(park) {
        this.data.storage = park;
        this.router.navigate(['/search']);
        console.log("Sent " + park.fullName);
      }
}
