import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';

import { NavigationComponent } from '@src/app/navigation/navigation.component';

import { HomeComponent } from '@src/app/navigation/home/home.component';
import { ClubsComponent } from '@src/app/navigation/clubs/clubs.component';
import { WorkoutsComponent } from '@src/app/navigation/workouts/workouts.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { SearchComponent } from './navigation/search/search.component';

//WorkoutsComponent Child
import { StartWorkoutComponent } from '@src/app/navigation/workouts/start-workout/start-workout.component';


// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

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
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
