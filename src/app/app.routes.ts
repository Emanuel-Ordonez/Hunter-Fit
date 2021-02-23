import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/navigation',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'navigation',
    component: NavigationComponent,
},
];
