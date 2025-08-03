import { Routes } from '@angular/router';
import { LandingComponent } from './landing_page/landing/landing.component';
import { RegisteredComponent } from './registered/registered/registered.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'registered', component:RegisteredComponent }
];



