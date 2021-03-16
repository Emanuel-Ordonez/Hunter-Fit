import { Component, OnInit } from '@angular/core';
import { Color, Dialogs } from "@nativescript/core";

@Component({
  selector: 'app-workout-history',
  templateUrl: './workout-history.component.html',
  styleUrls: ['./workout-history.component.css']
})
export class WorkoutHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public displayStats(){
    Dialogs.alert({
      title: "Workout Stats",
      message: "Data Will go here",
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
