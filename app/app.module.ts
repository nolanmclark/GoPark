import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent } from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import { routing,
         appRoutingProviders } from './app.routes';

import { Auth } from './auth.service';

@NgModule({
  declarations: [ AppComponent, DashboardComponent, ProfileComponent ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth
  ],
  imports: [        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        JsonpModule
        ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
