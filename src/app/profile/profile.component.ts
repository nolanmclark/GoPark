import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    profile:any;

    constructor(public auth: AuthService){
        auth.handleAuthentication();
        this.fetchProfile();
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