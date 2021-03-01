import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartWorkoutComponent } from '@src/app/navigation/workouts/start-workout/start-workout.component';
import { CardioWorkoutComponent } from './start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from './start-workout/weight-lifting-workout/weight-lifting-workout.component';



@NgModule({
  declarations: [CardioWorkoutComponent, WeightLiftingWorkoutComponent, StartWorkoutComponent],
  imports: [
    CommonModule
  ]
})
export class WorkoutsModule { }
