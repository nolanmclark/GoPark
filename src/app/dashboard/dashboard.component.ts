import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AuthService }  from '../auth.service';
import { parkService } from '../parkService/parkService.service';
import { Observable, Observer } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  providers: [ AuthService, parkService ],
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent {

profile:any;
parkResults: any;
parkSuggestions: any;
parkData: any;
featured = [];

constructor(public auth: AuthService, public park: parkService){
    auth.handleAuthentication();
    this.fetchProfile();
    this.fetchParks();
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

fetchProfile() {
    try {
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        } else {
            this.auth.getProfile((err, profile) => {
                this.profile = profile;
            });
        }
    } catch(e) {
        this.profile = {}
    }
}
}
