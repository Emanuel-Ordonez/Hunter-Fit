import { Component, OnInit } from '@angular/core';
import { getNumber, getString, setNumber } from '@nativescript/core/application-settings';

@Component({
  selector: 'app-workouts',
  moduleId: module.id,
  templateUrl: './workouts.component.tns.html',
  styleUrls: ['./workouts.component.tns.css']
})
export class WorkoutsComponent implements OnInit {

  currentWorkoutName: string;
  currentTimeB: number = 0;
  interval;
  public status = true;

  constructor() { }

  //todo: have it do this on every time the page loads instead of just once
  //todo: or ngrx way to share data between components
  public ngOnInit() {
    //todo: extract dup key to const
    this.currentWorkoutName = getString("MannyLovesHisNewAndroid");
  }
  public startWorkoutB() {
    console.log("workout starting in workoutComponent");
    if (this.status) {
      this.status = false;
      this.interval = setInterval(() => {
        this.currentTimeB++;
        // console.log(this.currentTimeB);
      }, 1000)
    }

  }

  public stopWorkout() {
    this.status = true;
    clearInterval(this.interval);
    // this.totalWorkoutTime = this.currentTime;

    console.log("workout stopped");
    setNumber("workoutTime", this.currentTimeB);
    const workoutTime: number = getNumber("workoutTime");
    console.log("workout time: " + workoutTime);

    // this.viewModel.set("totalWorkoutTime", this.currentTime);
    // console.log(this.viewModel.get("totalWorkoutTime"));
    this.currentTimeB = 0;
  }

}
