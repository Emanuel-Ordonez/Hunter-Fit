import { Routes } from '@angular/router';


import { HomeComponent } from './navigation/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { SearchComponent } from './navigation/search/search.component';
import { WorkoutsComponent } from './navigation/workouts/workouts.component';

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
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'workouts',
    component: WorkoutsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
