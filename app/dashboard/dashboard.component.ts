import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Auth }  from '../auth.service';


@Component({
  moduleId: module.id,
  selector: 'dashboard',
  providers: [ Auth ],
  template: `
            <div id="dashboard">
                <h1 *ngIf="!auth.authenticated()">Welcome, guest!</h1>
                <h1 *ngIf="auth.authenticated()">Welcome back, {{auth.userProfile.nickname}}!</h1>
                <p>Begin your adventure by searching or selecting one of your saved favorites.</p>
             <br />
             <h3>Today's Most Liked:</h3>
             </div>
             `,
})
export class DashboardComponent  {
    userProfile:any;

    constructor(private auth: Auth){
        this.userProfile = JSON.parse(localStorage.getItem('profile'));
    }
 }
