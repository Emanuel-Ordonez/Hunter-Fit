import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { LoginComponent } from '@src/app/login/login.component';
import { NavigationComponent } from '@src/app/navigation/navigation.component';


//children of NavigationComponent
import { HomeComponent } from '@src/app/navigation/home/home.component';
import { SearchComponent } from '@src/app/navigation/search/search.component';
import { ClubsComponent } from '@src/app/navigation/clubs/clubs.component';
import { WorkoutsComponent } from '@src/app/navigation/workouts/workouts.component';
  import { WorkoutHistoryComponent } from '@src/app/navigation/workouts/workout-history/workout-history.component';
import { ProfileComponent } from '@src/app/navigation/profile/profile.component';
  import { CardioDetailsComponent } from './navigation/profile/cardio-details/cardio-details.component';
  import { WeightliftingDetailsComponent } from './navigation/profile/weightlifting-details/weightlifting-details.component';

//StartWorkoutsComponent components
import { StartWorkoutComponent } from '@src/app/start-workout/start-workout.component';
import { CardioWorkoutComponent } from '@src/app/start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from '@src/app/start-workout/weight-lifting-workout/weight-lifting-workout.component';
  import { AddRepComponent } from '@src/app/start-workout/weight-lifting-workout/add-rep/add-rep.component';

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
        CardioDetailsComponent,
        WeightliftingDetailsComponent,
    
    StartWorkoutComponent,
    CardioWorkoutComponent,
    WeightLiftingWorkoutComponent,
      AddRepComponent,
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
