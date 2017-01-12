
import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { DashboardComponent }               from './dashboard.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: DashboardComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);