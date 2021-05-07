import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './navigation/home/home.component';
import { ClubsComponent } from './navigation/clubs/clubs.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { CardioDetailsComponent } from './navigation/profile/profile-workout-details/cardio-details/cardio-details.component';
import { WeightliftingDetailsComponent } from './navigation/profile/profile-workout-details/weightlifting-details/weightlifting-details.component';
import { SearchComponent } from './navigation/search/search.component';
import { WorkoutsComponent } from './navigation/workouts/workouts.component';
import { WorkoutHistoryComponent } from './navigation/workouts/workout-history/workout-history.component';

import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { CardioWorkoutComponent } from './start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from './start-workout/weight-lifting-workout/weight-lifting-workout.component';
import { AddRepComponent } from './start-workout/weight-lifting-workout/add-rep/add-rep.component';
import { ExtremeWorkoutComponent } from './start-workout/extreme-workout/extreme-workout.component';
import { AddExtremeRepComponent } from './start-workout/extreme-workout/add-extreme-rep/add-extreme-rep.component';

import { EditProfileComponent } from './profile-info/edit-profile/edit-profile.component';
import { GoalsComponent } from './profile-info/goals/goals.component';
import { SetGoalComponent } from './profile-info/goals/set-goal/set-goal.component';
import { ProfileWorkoutDetailsComponent } from './navigation/profile/profile-workout-details/profile-workout-details.component';
import { TrackingComponent } from './tracking/tracking.component';
import { GoalsMetComponent } from './profile-info/goals/goals-met/goals-met.component';

export const routes: Routes = [
  { path: "", redirectTo: "navigation", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "navigation", component: NavigationComponent,
    children: [
      { path: "", component: SearchComponent, outlet: 'search' },
      { path: "", component: TrackingComponent, outlet: 'tracking' },
      {
        path: "", component: WorkoutsComponent, outlet: 'workouts',
        children: [
          { path: "", component: WorkoutHistoryComponent, outlet: 'workoutHistory' },
        ]
      },
      {
        path: "", component: ProfileComponent, outlet: 'profile',
        children: [
          { path: "profileWorkoutDetails", component: ProfileWorkoutDetailsComponent},
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

  { path: "goals", component: GoalsComponent },
  { path: "setGoal", component: SetGoalComponent },
  { path: "goalsMet", component: GoalsMetComponent },

  //temporary vvv
  { path: "search", component: SearchComponent },
  {path: "profile", component: ProfileComponent},
  { path: "profileWorkoutDetails", component: ProfileWorkoutDetailsComponent},
];
