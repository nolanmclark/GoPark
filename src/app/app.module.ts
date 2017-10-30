import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http, RequestOptions } from '@angular/http';

import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { CallbackComponent } from './callback/callback.component';
import {HttpClientModule} from '@angular/common/http';

import { routing, appRoutingProviders } from './app.routes';

import { AuthService } from './auth.service';
import { parkService } from './parkService/parkService.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [ AppComponent, SearchComponent, DashboardComponent, ProfileComponent, ContactComponent, CallbackComponent],
  providers: [ {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [ Http, RequestOptions ]
  },
    appRoutingProviders,
    AuthService,
    parkService
  ],
  imports: [        
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    JsonpModule,
    HttpClientModule
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
