import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { StartWorkoutComponent } from '@src/app/navigation/workouts/start-workout/start-workout.component';
import { AddRepComponent } from '@src/app/navigation/workouts/start-workout/weight-lifting-workout/add-rep/add-rep.component';



@NgModule({
  declarations: [StartWorkoutComponent, AddRepComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WorkoutsModule { }
