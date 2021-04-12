import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { LoginComponent } from '@src/app/login/login.component';
import { NavigationComponent } from '@src/app/navigation/navigation.component';

//children of NavigationComponent
import { HomeComponent } from '@src/app/navigation/home/home.component';
import { ClubsComponent } from '@src/app/navigation/clubs/clubs.component';
import { WorkoutsComponent } from '@src/app/navigation/workouts/workouts.component';
  import { WorkoutHistoryComponent } from '@src/app/navigation/workouts/workout-history/workout-history.component';
import { ProfileComponent } from '@src/app/navigation/profile/profile.component';
import { SearchComponent } from '@src/app/navigation/search/search.component';

//StartWorkoutsComponent components
import { StartWorkoutComponent } from '@src/app/start-workout/start-workout.component';
import { CardioWorkoutComponent } from '@src/app/start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from '@src/app/start-workout/weight-lifting-workout/weight-lifting-workout.component';
  import { AddRepComponent } from '@src/app/start-workout/weight-lifting-workout/add-rep/add-rep.component';

import { CardioDetailsComponent } from '@src/app/navigation/profile/profile-workout-details/cardio-details/cardio-details.component';
import { WeightliftingDetailsComponent } from '@src/app/navigation/profile/profile-workout-details/weightlifting-details/weightlifting-details.component';
import { ExtremeWorkoutComponent } from '@src/app/current-workout/extreme-workout/extreme-workout.component';
import { AddExtremeRepComponent } from '@src/app/current-workout/extreme-workout/add-extreme-rep/add-extreme-rep.component';
import { EditProfileComponent } from '@src/app/profile-info/edit-profile/edit-profile.component';
import { GoalsComponent } from '@src/app/profile-info/goals/goals.component';
import { SetGoalComponent } from '@src/app/profile-info/goals/set-goal/set-goal.component';
import { ProfileWorkoutDetailsComponent } from './navigation/profile/profile-workout-details/profile-workout-details.component';


// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    NavigationComponent,
      HomeComponent,
      SearchComponent,
      ClubsComponent,
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
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
