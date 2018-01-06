import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { DashboardComponent }          from './dashboard/dashboard.component';
import { ProfileComponent }            from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login-email',
    component: EmailComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];


export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
