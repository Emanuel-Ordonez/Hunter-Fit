import { Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './navigation/search/search.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/search',
      pathMatch: 'full',
  },
  {
    path: 'navigation',
    component: NavigationComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  }
];
