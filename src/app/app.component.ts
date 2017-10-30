import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router'
import {NgZone, Renderer, ElementRef, ViewChild} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit { 

profile: any;

@ViewChild('spinnerElement')
spinnerElement: ElementRef

constructor(public auth: AuthService, private router: Router, private ngZone: NgZone, private renderer: Renderer, private http: Http) {
    auth.handleAuthentication();
    router.events.subscribe((event: RouterEvent) => {
      this._navigationInterceptor(event)
    })
}

ngOnInit() {
  if(this.auth.handleAuthentication()) {
    if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
    } else {
        this.auth.getProfile((err, profile) => {
        this.profile = profile;
        });
    }
  }
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
