import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Auth }  from './auth.service';


@Component({
  selector: 'dashboard',
  providers: [ Auth ],
  template: `
    <div class="navbar-header" style="float: right">
    <button class="btn btn-primary btn-margin" (click)="auth.login()" *ngIf="!auth.authenticated()">Log In</button>
    <button class="btn btn-primary btn-margin" (click)="auth.logout()" *ngIf="auth.authenticated()">Log Out</button>
    </div>
            <div id="dashboard">
                <h1 *ngIf="!auth.authenticated()">Welcome, guest!</h1>
                <h1 *ngIf="auth.authenticated() && auth.userProfile">Welcome back, {{auth.userProfile.name}}!</h1>
                <p>Begin your adventure by searching or selecting one of your saved favorites.</p>
             <br />
             <h3>Today's Most Liked:</h3>
             </div>
             `,
})
export class DashboardComponent  {
  constructor(private auth: Auth) {}
 }
