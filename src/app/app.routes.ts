import { Routes } from '@angular/router';
import { ClubsComponent } from './navigation/clubs/clubs.component';


import { HomeComponent } from './navigation/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { SearchComponent } from './navigation/search/search.component';

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
    path: 'clubs',
    component: ClubsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];
