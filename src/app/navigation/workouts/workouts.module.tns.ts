import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { CurrentWorkoutComponent } from '@src/app/navigation/workouts/current-workout/current-workout.component';
import { StartWorkoutComponent } from '@src/app/navigation/workouts/start-workout/start-workout.component';



@NgModule({
  declarations: [CurrentWorkoutComponent, StartWorkoutComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WorkoutsModule { }
