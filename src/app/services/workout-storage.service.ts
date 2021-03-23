import { Injectable } from '@angular/core';
import { IRepSet } from './IRepSet';
import { Workout } from './workout';

@Injectable({
  providedIn: 'root'
})

export class WorkoutStorageService {

  public allWorkouts: Workout[] = [];

  constructor() { }

  saveWorkout(totalTime: number, date: string, repSets: IRepSet[], notes: string) {
    // construct workout object:
    const workoutToSave : Workout = {totalWorkoutTime: totalTime, workoutDate: date, totalRepSets: repSets, workoutNotes: notes};
    // store workout object:
    this.allWorkouts.push(workoutToSave);
    // for (let data of this.allWorkouts){console.log("Data: ", data);}
  }

  getWorkouts(){
    return this.allWorkouts;
  }
}
