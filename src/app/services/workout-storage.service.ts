import { Injectable } from '@angular/core';
import { IRepSet } from './IRepSet';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})

export class WorkoutStorageService {

  public allWorkouts: Workout[] = [];

  constructor() { }

  saveWorkout(totalTime: number, type: any, repSets: IRepSet[]) {
    // construct workout object:
    const workoutToSave : Workout = {totalWorkoutTime: totalTime, workoutType: type, totalRepSets: repSets};
    // store workout object:
    this.allWorkouts.push(workoutToSave);
    for (let data of this.allWorkouts){console.log("Data: ", data);}
    // console.log("allWorkouts: " + this.allWorkouts[0].workoutType, this.allWorkouts[0].totalWorkoutTime);
  }


}
