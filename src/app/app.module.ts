import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';


import { LoginComponent } from './login/login.component';
import { NavigationComponent } from '@src/app/navigation/navigation.component';


//children of NavigationComponent
import { HomeComponent } from '@src/app/navigation/home/home.component';
import { SearchComponent } from '@src/app/navigation/search/search.component';
import { ClubsComponent } from '@src/app/navigation/clubs/clubs.component';
import { WorkoutsComponent } from '@src/app/navigation/workouts/workouts.component';
  import { WorkoutHistoryComponent } from '@src/app/navigation/workouts/workout-history/workout-history.component';
import { ProfileComponent } from '@src/app/navigation/profile/profile.component';
  import { CardioDetailsComponent } from '@src/app/navigation/profile/profile-workout-details/cardio-details/cardio-details.component';
  import { WeightliftingDetailsComponent } from './navigation/profile/profile-workout-details/weightlifting-details/weightlifting-details.component';

//StartWorkoutsComponent components
import { StartWorkoutComponent } from '@src/app/start-workout/start-workout.component';
import { CardioWorkoutComponent } from '@src/app/start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from '@src/app/start-workout/weight-lifting-workout/weight-lifting-workout.component';
  import { AddRepComponent } from '@src/app/start-workout/weight-lifting-workout/add-rep/add-rep.component';
import { ExtremeWorkoutComponent } from '@src/app/start-workout/extreme-workout/extreme-workout.component';
import { AddExtremeRepComponent } from '@src/app/start-workout/extreme-workout/add-extreme-rep/add-extreme-rep.component';
import { EditProfileComponent } from '@src/app/profile-info/edit-profile/edit-profile.component';
import { GoalsComponent } from '@src/app/profile-info/goals/goals.component';
import { SetGoalComponent } from './profile-info/goals/set-goal/set-goal.component';
import { ProfileWorkoutDetailsComponent } from '@src/app/navigation/profile/profile-workout-details/profile-workout-details.component';
import { GoalsMetComponent } from '@src/app/profile-info/goals/goals-met/goals-met.component';
import { TrackingComponent } from './tracking/tracking.component';

import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

// import { isIOS } from '@nativescript/core';
// declare var GMSServices: any;

// if (isIOS) { 
//   GMSServices.provideAPIKey("AIzaSyA78-ajT3guaYHOnT2vAR-1DRUdMAOviis");
// }

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
      HomeComponent,
      SearchComponent,
      TrackingComponent,
      WorkoutsComponent,
        WorkoutHistoryComponent,
      ProfileComponent,
        ProfileWorkoutDetailsComponent,
          CardioDetailsComponent,
          WeightliftingDetailsComponent,
    
    StartWorkoutComponent,
    CardioWorkoutComponent,
    WeightLiftingWorkoutComponent,
      AddRepComponent,
    ExtremeWorkoutComponent,
      AddExtremeRepComponent,
    
    EditProfileComponent,
    GoalsComponent,
    SetGoalComponent,
      GoalsMetComponent,

    NativeScriptUIChartModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})

export class AppModule { }
