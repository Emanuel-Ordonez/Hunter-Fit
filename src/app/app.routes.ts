import { Routes } from '@angular/router';
import { ClubsComponent } from './navigation/clubs/clubs.component';


import { HomeComponent } from './navigation/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { SearchComponent } from './navigation/search/search.component';
import { WorkoutsComponent } from './navigation/workouts/workouts.component';
import { StartWorkoutComponent } from './navigation/workouts/start-workout/start-workout.component';
import { CardioWorkoutComponent } from './navigation/workouts/start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from './navigation/workouts/start-workout/weight-lifting-workout/weight-lifting-workout.component';

export const routes: Routes = [
  { path: "", redirectTo: "startWorkout", pathMatch: "full" },
  { path: "navigation", component: NavigationComponent },

  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "clubs", component: ClubsComponent },
  { path: "workouts", component: WorkoutsComponent },
  { path: "profile", component: ProfileComponent },

  { path: "startWorkout", component: StartWorkoutComponent },
  { path: "cardioWorkout", component: CardioWorkoutComponent },
  { path: "weightLiftingWorkout", component: WeightLiftingWorkoutComponent },
];
