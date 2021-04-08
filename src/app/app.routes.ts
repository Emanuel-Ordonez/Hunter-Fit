import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './navigation/home/home.component';
import { ClubsComponent } from './navigation/clubs/clubs.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { CardioDetailsComponent } from './navigation/profile/cardio-details/cardio-details.component';
import { WeightliftingDetailsComponent } from './navigation/profile/weightlifting-details/weightlifting-details.component';
import { SearchComponent } from './navigation/search/search.component';
import { WorkoutsComponent } from './navigation/workouts/workouts.component';
import { WorkoutHistoryComponent } from './navigation/workouts/workout-history/workout-history.component';

import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { CardioWorkoutComponent } from './start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from './start-workout/weight-lifting-workout/weight-lifting-workout.component';
import { AddRepComponent } from './start-workout/weight-lifting-workout/add-rep/add-rep.component';
import { ExtremeWorkoutComponent } from './current-workout/extreme-workout/extreme-workout.component';
import { AddExtremeRepComponent } from './current-workout/extreme-workout/add-extreme-rep/add-extreme-rep.component';

import { EditProfileComponent } from './profile-info/edit-profile/edit-profile.component';
import { GoalsComponent } from './profile-info/goals/goals.component';
import { SetGoalComponent } from './profile-info/goals/set-goal/set-goal.component';

export const routes: Routes = [
  { path: "", redirectTo: "navigation", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "navigation", component: NavigationComponent,
    children: [
      { path: "", component: HomeComponent, outlet: 'home' },
      { path: "", component: SearchComponent, outlet: 'search' },
      { path: "", component: ClubsComponent, outlet: 'clubs' },
      {
        path: "", component: WorkoutsComponent, outlet: 'workouts',
        children: [
          { path: "", component: WorkoutHistoryComponent, outlet: 'workoutHistory' },
        ]
      },
      {
        path: "", component: ProfileComponent, outlet: 'profile',
        children: [
          { path: "", component: CardioDetailsComponent, outlet: 'cardioDetails' },
          { path: "", component: WeightliftingDetailsComponent, outlet: 'weightliftingDetails' },
        ]
      },
    ]
  },

  { path: "startWorkout", component: StartWorkoutComponent },
  { path: "cardioWorkout", component: CardioWorkoutComponent },
  {
    path: "weightLiftingWorkout", component: WeightLiftingWorkoutComponent,
    children: [
      { path: "", component: AddRepComponent, outlet: 'addRep' },
    ]
  },
  {
    path: "extremeWorkout", component: ExtremeWorkoutComponent,
    children: [
      { path: "", component: AddExtremeRepComponent, outlet: 'addextremeRep' },
    ]
  },

  { path: "editProfile", component: EditProfileComponent },

  { path: "goal", component: GoalsComponent },
  { path: "setGoal", component: SetGoalComponent },

  //temporary vvv
  { path: "search", component: SearchComponent },
  {
    path: "profile", component: ProfileComponent,
    children: [
      { path: "", component: CardioDetailsComponent, outlet: 'cardioDetails' },
      { path: "", component: WeightliftingDetailsComponent, outlet: 'weightliftingDetails' },
    ]
  },
];
