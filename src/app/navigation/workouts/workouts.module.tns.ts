import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { StartWorkoutComponent } from '@src/app/navigation/workouts/start-workout/start-workout.component';



@NgModule({
  declarations: [StartWorkoutComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WorkoutsModule { }
