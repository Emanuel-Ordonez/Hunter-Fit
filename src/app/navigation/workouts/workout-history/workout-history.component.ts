import { Component, OnInit } from '@angular/core';
import { Color, Dialogs } from "@nativescript/core";

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.css']
})
export class WorkoutHistoryComponent implements OnInit {
  repNumber: number=1;
  x: number=10;
  weight: number=100;

  constructor() { }

  ngOnInit(): void {
  }

  public displayStats(){
    const statsTopic=`Rep# Reps Weight\n`;
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
