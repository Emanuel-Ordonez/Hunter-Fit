import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/navigation/home/home.component';
import { NavigationComponent } from '@src/app/navigation/navigation.component';
import { ClubsComponent } from '@src/app/navigation/clubs/clubs.component';
import { StartWorkoutComponent } from '@src/app/start-workout/start-workout.component';
import { WorkoutsComponent } from '@src/app/navigation/workouts/workouts.component';
import { ProfileComponent } from './navigation/profile/profile.component';
import { SearchComponent } from './navigation/search/search.component';



// Uncomment and add to NgModule imports if you need to use two-way binding and/or HTTP wrapper
// import { NativeScriptFormsModule, NativeScriptHttpClientModule } from '@nativescript/angular';

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
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
