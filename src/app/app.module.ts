import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { NavigationComponent } from '@src/app/navigation/navigation.component';

import { HomeComponent } from '@src/app/navigation/home/home.component';
import { ClubsComponent } from '@src/app/navigation/clubs/clubs.component';
import { WorkoutsComponent } from '@src/app/navigation/workouts/workouts.component';
import { ProfileComponent } from '@src/app/navigation/profile/profile.component';
import { SearchComponent } from '@src/app/navigation/search/search.component';

//WorkoutsComponent Child
import { StartWorkoutComponent } from '@src/app/navigation/workouts/start-workout/start-workout.component';
import { CardioWorkoutComponent } from '@src/app/navigation/workouts/start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from './navigation/workouts/start-workout/weight-lifting-workout/weight-lifting-workout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

    HomeComponent,
    ClubsComponent,
    SearchComponent,
    WorkoutsComponent,
    ProfileComponent,
    
    StartWorkoutComponent,
    
    CardioWorkoutComponent,
    WeightLiftingWorkoutComponent,
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
