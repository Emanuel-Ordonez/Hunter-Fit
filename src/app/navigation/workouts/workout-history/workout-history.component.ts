import { Component, OnInit } from '@angular/core';
import { Color, Dialogs } from "@nativescript/core";
import { Workout } from '@src/app/services/workout';
import { IRepSet } from '@src/app/services/IRepSet';
import { WorkoutStorageService } from '@src/app/services/workout-storage.service';
import { iosPreferredDatePickerStyleProperty } from '@nativescript/core/ui/date-picker';

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.css']
})
export class WorkoutHistoryComponent implements OnInit {
  repNumber: number=1;
  x: number=10;
  weight: number=100;
  public allWorkouts: Workout[];

  constructor(private workoutStorageService: WorkoutStorageService) { }

  ngOnInit(): void {
    this.allWorkouts=this.workoutStorageService.getWorkouts();
  }

  public displayStats(){
    console.log("################# WORKOUT(S) ####################");
    // for(let i = 0; i < this.allWorkouts.length; i++){
      console.log()
      console.log("Workout Type: ",this.allWorkouts[i].workoutType);
      console.log("Workout Time: ",this.allWorkouts[i].totalWorkoutTime);
      
      const temp=this.allWorkouts[i].totalRepSets;

      for(let j = 0; j < temp.length; j++){

        console.log("Workout set #" + temp[j].setNumber + ": ");
        console.log("\tSet Reps: ", temp[j].setReps);
        console.log("\tSet Weight: ", temp[j].setWeight);
      }
    

    console.log("displayState() allWorkouts: " + this.allWorkouts[0].workoutType, this.allWorkouts[0].totalWorkoutTime);

    const statsTopic=`Workout: ${this.allWorkouts[0].workoutType}\nTotal Time: ${this.allWorkouts[0].totalWorkoutTime}\nRep# Reps Weight\n`;
    const stats=`${this.repNumber}     ${this.x}       ${this.weight}\n`;

    Dialogs.alert({
      title: "Workout Stats",
      message: statsTopic+stats,
      okButtonText: "Done"
    }).then(() => {
        console.log("Dialog closed!");
    });
  }

  public displayNotes(){
    Dialogs.alert({
      title: "Workout Notes",
      message: "Notes Will go here",
      okButtonText: "Done"
    }).then(() => {
        console.log("Dialog closed!");
    });
  }
}
