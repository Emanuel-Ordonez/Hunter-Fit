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
  }

  public displayStats(workout: any){
     console.log("################# WORKOUT(S) ####################");
     //console.log(workout.workoutType);
    // // for(let i = 0; i < this.allWorkouts.length; i++){
    //   console.log()
    //   console.log("Workout Type: ",this.allWorkouts[i].workoutType);
    //   console.log("Workout Time: ",this.allWorkouts[i].totalWorkoutTime);
      
    const allSets = workout.totalRepSets;
    let temp:string=``;

    for(let j = 0; j < allSets.length; j++){
      temp+=`\nWorkout set # ${allSets[j].setNumber}: `;
      temp+=`\n\tSet Reps: ${allSets[j].setReps}`;
      temp+=`\n\tSet Weight: ${allSets[j].setWeight}`;
      // console.log("Workout set #" + allSets[j].setNumber + ": ");
      // console.log("\tSet Reps: ", allSets[j].setReps);
      // console.log("\tSet Weight: ", allSets[j].setWeight);
    }
    
    //console.log("displayState() allWorkouts: " + this.allWorkouts[0].workoutType, this.allWorkouts[0].totalWorkoutTime);

    //const statsTopic=`Workout: ${this.allWorkouts[0].workoutType}\nTotal Time: ${this.allWorkouts[0].totalWorkoutTime}\nRep# Reps Weight\n`;
    // const stats=`${this.repNumber}     ${this.x}       ${this.weight}\n`;
    const stats=temp;

    Dialogs.alert({
      title: "Workout Stats",
      message: stats,
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
