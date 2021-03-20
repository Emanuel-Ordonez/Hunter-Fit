import { Component, OnInit } from '@angular/core';
import { Color, Dialogs } from "@nativescript/core";
import { Workout } from '@src/app/services/workout';
import { IRepSet } from '@src/app/services/IRepSet';
import { WorkoutStorageService } from '@src/app/services/workout-storage.service';
import { iosPreferredDatePickerStyleProperty } from '@nativescript/core/ui/date-picker';

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

  constructor(private workoutStorageService: WorkoutStorageService) { }

  ngOnInit(): void {
  }

  public getAllWorkouts(){
    //console.log(this.reverseArray(this.workoutStorageService.getWorkouts()));
    return this.reverseArray(this.workoutStorageService.getWorkouts());
  }

  private reverseArray(array: Workout[]){
    return array.slice().reverse();
  }

  public displayStats(workout: Workout){
    const duration =`Elapsed Time: ${workout.totalWorkoutTime}\n`; 
    Dialogs.alert({
      title: "Workout Stats:",
      message: duration+this.getWorkoutStats(workout.totalRepSets),
      okButtonText: "Done"
    }).then(() => {
      console.log("Dialog closed!");
    });
  }

  private getWorkoutStats(allSets: IRepSet[]){
    let temp:string=``;

    for(let j = 0; j < allSets.length; j++){
      temp+=`\nWorkout set # ${allSets[j].setNumber}: `;
      temp+=`\nSet Reps: ${allSets[j].setReps}`;
      temp+=`\nSet Weight: ${allSets[j].setWeight}`;
    }
    return temp;
  }

  public displayNotes(workout: Workout){
    Dialogs.alert({
      title: "Workout Notes",
      message: workout.workoutNotes,
      okButtonText: "Done"
    }).then(() => {
      console.log("Dialog closed!");
    });
  }
}
