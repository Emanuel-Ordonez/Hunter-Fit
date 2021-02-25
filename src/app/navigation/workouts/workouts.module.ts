import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWorkoutComponent } from '@src/app/navigation/workouts/current-workout/current-workout.component';
import { StartWorkoutComponent } from '@src/app/navigation/workouts/start-workout/start-workout.component';



@NgModule({
  declarations: [CurrentWorkoutComponent, StartWorkoutComponent],
  imports: [
    CommonModule
  ]
})
export class WorkoutsModule { }
