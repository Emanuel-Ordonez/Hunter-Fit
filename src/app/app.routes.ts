import { Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';

import { HomeComponent } from './navigation/home/home.component';
import { ClubsComponent } from './navigation/clubs/clubs.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { SearchComponent } from './navigation/search/search.component';
import { WorkoutsComponent } from './navigation/workouts/workouts.component';

import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { CardioWorkoutComponent } from './start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from './start-workout/weight-lifting-workout/weight-lifting-workout.component';
  import { AddRepComponent } from './start-workout/weight-lifting-workout/add-rep/add-rep.component';

export const routes: Routes = [
  { path: "", redirectTo: "navigation", pathMatch: "full" },
  { path: "navigation", component: NavigationComponent,
    children: [
      { path: "", component: HomeComponent, outlet: 'home' },
      { path: "", component: SearchComponent, outlet: 'search' },
      { path: "", component: ClubsComponent, outlet: 'clubs' },
      { path: "", component: WorkoutsComponent, outlet: 'workouts'},
      { path: "", component: ProfileComponent, outlet: 'profile' },
    ]
  },

  { path: "startWorkout", component: StartWorkoutComponent },
  { path: "cardioWorkout", component: CardioWorkoutComponent },
  { path: "weightLiftingWorkout", component: WeightLiftingWorkoutComponent, 
    children:[
      { path: "", component: AddRepComponent, outlet: 'addRep'},
    ]
  },
];
