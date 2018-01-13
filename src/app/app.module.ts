import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, Http, RequestOptions } from '@angular/http';

import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import 'hammerjs';
import 'mousetrap';
import { ModalGalleryModule } from 'angular-modal-gallery';

import { AppComponent } from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { CallbackComponent } from './callback/callback.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';

import { routing, appRoutingProviders } from './app.routes';
import * as firebase from 'firebase';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import { AuthService } from './auth.service';
import { parkService } from './parkService/parkService.service';
import { UserService } from './userService/userService';

import { firebaseConfig } from '../keys/firebaseConfig';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { Data } from './providers/data/data';


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [ AppComponent, SearchComponent, DashboardComponent, ProfileComponent, ContactComponent, CallbackComponent, LoginComponent, EmailComponent, SignupComponent],
  providers: [ {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [ Http, RequestOptions ]
  },
    appRoutingProviders,
    AuthService,
    parkService,
    UserService,
    AngularFireAuth,
    Data
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AngularFireModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ModalGalleryModule.forRoot(),
    AngularFirestoreModule,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
