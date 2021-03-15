import { Component, OnInit } from '@angular/core';

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
    alert("Your stats for this workout")
  }
  public displayNotes(){
    alert("Your notes for this workout")
  }

}
