import { Routes } from '@angular/router';

import { HomeComponent } from './navigation/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/navigation',
    pathMatch: 'full',
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
