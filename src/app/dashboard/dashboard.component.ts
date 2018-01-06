import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { parkService } from '../parkService/parkService.service';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import * as firebase from 'firebase';
import { SearchComponent } from '../search/search.component';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  providers: [ parkService ],
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent {

profile:any;
parkResults: any;
parkSuggestions: any;
parkData: any;
featured = [];
user = {};
isSignedOut: any;

constructor(private router: Router, public park: parkService){
    this.fetchParks();
}

checkForLogin() {
  let user = firebase.auth().currentUser;
  if(user != null)
    this.user = user;
    return true;
}

fetchParks() {
    try {
        this.parkSuggestions = this.park.getFeaturedData();
        this.parkSuggestions.subscribe(data => {
            this.parkData = data.data;
            for(let i = 0; i < 3; i++) {
                this.featured.push(this.parkData[Math.floor((Math.random() * 50) + 1)]);
            }
        });
    } catch(e) {
        console.log(e);
    }
}

  search(park) {
    this.router.navigate(['/search', {park: park}]);
    console.log("Sent " + park.fullName);
  }
}
