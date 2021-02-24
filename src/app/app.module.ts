import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/navigation/home/home.component';
import { NavigationComponent } from '@src/app/navigation/navigation.component';
import { ClubsComponent } from '@src/app/navigation/clubs/clubs.component';
import { StartWorkoutComponent } from '@src/app/start-workout/start-workout.component';
import { WorkoutsComponent } from '@src/app/navigation/workouts/workouts.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { SearchComponent } from './navigation/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ClubsComponent,
    StartWorkoutComponent,
    SearchComponent,
    WorkoutsComponent,
    ProfileComponent,
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
