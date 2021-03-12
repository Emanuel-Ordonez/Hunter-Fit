import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';


//children of NavigationComponent
import { HomeComponent } from './navigation/home/home.component';
import { ClubsComponent } from './navigation/clubs/clubs.component';
import { WorkoutsComponent } from './navigation/workouts/workouts.component';
  import { WorkoutHistoryComponent } from './navigation/workouts/workout-history/workout-history.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { SearchComponent } from './navigation/search/search.component';

//StartWorkoutsComponent components
import { StartWorkoutComponent } from './start-workout/start-workout.component';
import { CardioWorkoutComponent } from './start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from './start-workout/weight-lifting-workout/weight-lifting-workout.component';
  import { AddRepComponent } from './start-workout/weight-lifting-workout/add-rep/add-rep.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
      HomeComponent,
      ClubsComponent,
      SearchComponent,
      WorkoutsComponent,
        WorkoutHistoryComponent,
      ProfileComponent,
    
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
