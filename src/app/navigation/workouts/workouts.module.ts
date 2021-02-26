import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartWorkoutComponent } from '@src/app/navigation/workouts/start-workout/start-workout.component';
import { CardioWorkoutComponent } from '@src/app/navigation/workouts/start-workout/cardio-workout/cardio-workout.component';
import { WeightLiftingWorkoutComponent } from '@src/app/navigation/workouts/start-workout/weight-lifting-workout/weight-lifting-workout.component';
import { AddRepComponent } from '@src/app/navigation/workouts/start-workout/weight-lifting-workout/add-rep/add-rep.component';



@NgModule({
  declarations: [CardioWorkoutComponent, WeightLiftingWorkoutComponent, StartWorkoutComponent, AddRepComponent],
  imports: [
    CommonModule
  ]
})
export class WorkoutsModule { }
