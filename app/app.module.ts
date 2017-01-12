import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { DashboardComponent }  from './dashboard.component';

import { routing,
         appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [ DashboardComponent ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS
  ],
  imports: [        BrowserModule,
        routing,
        FormsModule,
        HttpModule,
        JsonpModule
        ],
  bootstrap:    [ DashboardComponent ]
})
export class AppModule { }
