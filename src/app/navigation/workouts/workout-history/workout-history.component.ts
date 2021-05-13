import { Component, OnInit } from '@angular/core';
import { Color, Dialogs } from "@nativescript/core";
import { Workout } from '@src/app/services/workout/workout-templates/workout';
import { WorkoutStorageService } from '@src/app/services/workout/workout-storage.service';
import { iosPreferredDatePickerStyleProperty } from '@nativescript/core/ui/date-picker';
import { TimerService } from '@src/app/services/timer/timer.service';
import { IRepSetWl } from '@src/app/services/workout/workout-templates/set-interface/IRepSet-weightlifting';
import { WeightLiftingWorkout } from '@src/app/services/workout/workout-templates/weightlifting-workout';
import { ExtremeWorkout } from '@src/app/services/workout/workout-templates/extreme-workout';
import { WeightLiftingWorkoutComponent } from '@src/app/start-workout/weight-lifting-workout/weight-lifting-workout.component';
import { isObject } from '@nativescript/core/utils/types';
import { CardioWorkout } from '@src/app/services/workout/workout-templates/cardio-workout';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.tns.html',
  styleUrls: ['./workout-history.component.tns.css']
})
export class WorkoutHistoryComponent implements OnInit {
  repNumber: number = 1;
  x: number = 10;
  weight: number = 100;
  public allWorkouts: Workout[];

  constructor(private workoutStorageService: WorkoutStorageService, private timerService: TimerService) { }

  ngOnInit(): void {
  }

  public getAllWorkouts(){
    return this.reverseArray(this.workoutStorageService.getWorkouts());
  }

  private reverseArray(array: Workout[]){
    return array.slice().reverse();
  }

  public displayStats(workout: Workout){
    const duration =`Elapsed Time: ${this.timerService.formatTime(workout.totalWorkoutTime)}\n`; 
    Dialogs.alert({
      title: "Workout Stats:",
      message: duration+this.getWorkoutStats(workout),
      okButtonText: "Done"
    }).then(() => {
      console.log("Dialog closed!");
    });
  }

  private getWorkoutStats(workout: Workout){
    
    let temp: String=``;
    //let somehint: WeightLiftingWorkout;
    if(workout.hasOwnProperty('distanceTraveled')){
      let cWorkout = workout as CardioWorkout;
      temp += `\nMiles: ${cWorkout.distanceTraveled}`;
    }
    else if(workout.hasOwnProperty('totalWRepSets')){
      let wlWorkout = workout as WeightLiftingWorkout;
      let allSets = wlWorkout.totalWRepSets;
      for(let j = 0; j < allSets.length; j++){
        temp+=`\nWorkout set # ${allSets[j].setNumber}: `;
        temp+=`\nSet Reps: ${allSets[j].setReps}`;
        temp+=`\nSet Weight: ${allSets[j].setWeight}`;
        temp+='\n';
      }
    }
    else if(workout.hasOwnProperty('totalERepSets')){
      let eWorkout = workout as ExtremeWorkout;
      let allSets = eWorkout.totalERepSets;
      for(let j = 0; j < allSets.length; j++){
        temp+=`\nWorkout Type: ${allSets[j].setWorkoutType}`;
        temp+=`\nWorkout set # ${allSets[j].setNumber}: `;
        temp+=`\nSet Reps: ${allSets[j].setReps}`;
        temp+=`\nSet Weight: ${allSets[j].setWeight}`;
        temp+='\n';
      }
    }
    return temp;
  }

  public displayNotes(workout: Workout){
    if(workout.workoutNotes){
      Dialogs.alert({
        title: "Workout Notes",
        message: workout.workoutNotes,
        okButtonText: "Done"
      }).then(() => {
        console.log("Dialog closed!");
      });
    }
    else{
      Dialogs.alert({
        title: "Workout Notes",
        message: 'No notes were written',
        okButtonText: "Done"
      }).then(() => {
        console.log("Dialog closed!");
      });
    }
  }
}

