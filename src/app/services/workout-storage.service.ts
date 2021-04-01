import { Injectable } from '@angular/core';
import { CardioWorkout } from './cardio-workout';
import { DateService } from './date/date.service';
import { ExtremeWorkout } from './extreme-workout';
import { IRepSetE } from './IRepSet-extreme';
import { IRepSetWl } from './IRepSet-weightlifting';
import { WeightLiftingWorkout } from './weightlifting-workout';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})

export class WorkoutStorageService {

  public allWorkouts: Workout[] = [];

  constructor() { }

  saveCardioWorkout(totalTime: number, date: DateService, distance: number, notes: string) {
    // construct workout object:
    const workoutToSave : CardioWorkout = {totalWorkoutTime: totalTime, workoutDate: date, distanceTraveled: distance, workoutNotes: notes};
    // store workout object:
    this.allWorkouts.push(workoutToSave);
  }

  saveWeightliftingWorkout(totalTime: number, date: DateService, repSets: IRepSetWl[], notes: string) {
    // construct workout object:
    const workoutToSave : WeightLiftingWorkout = {totalWorkoutTime: totalTime, workoutDate: date, totalRepSets: repSets, workoutNotes: notes};
    // store workout object:
    this.allWorkouts.push(workoutToSave);
  }

  saveExtremeWorkout(totalTime: number, date: DateService, repSets: IRepSetE[], notes: string) {
    // construct workout object:
    const workoutToSave : ExtremeWorkout = {totalWorkoutTime: totalTime, workoutDate: date, totalRepSets: repSets, workoutNotes: notes};
    // store workout object:
    this.allWorkouts.push(workoutToSave);
  }

  getWorkouts(){
    return this.allWorkouts;
  }
}
