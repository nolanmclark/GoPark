import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { DashboardComponent }          from './dashboard/dashboard.component';
import { ProfileComponent }            from './profile/profile.component';

const appRoutes: Routes = [
  { 
    path: '',
    component: DashboardComponent 
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);