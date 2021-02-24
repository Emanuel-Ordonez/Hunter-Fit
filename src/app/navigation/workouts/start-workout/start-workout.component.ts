import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getNumber, setNumber } from '@nativescript/core/application-settings';
import { EventData, Observable } from '@nativescript/core/data/observable';
import { ListPicker } from '@nativescript/core/ui/list-picker';
// import { WorkoutConstants } from '../../../services/WorkoutConstants.tns';

@Component({
  selector: 'app-start-workout',
  moduleId: module.id,
  templateUrl: './start-workout.component.tns.html',
  styleUrls: ['./start-workout.component.tns.css']
})
export class StartWorkoutComponent  {

  public workoutType: any;
  currentTime: number = 0;
  interval;
  public status = true;
  public totalWorkoutTime;
  public lastWorkoutTime = getNumber("workoutTime");
  public viewModel = new Observable(); // <-- needs to be updated/fixed
  public prevWorkoutType: any;
  public allWorkouts: Array<string | number>[];

  public onSelectedIndexChanged(args: EventData) {
    const picker = <ListPicker>args.object;
  }

  constructor() { }
  // ngOnInit(): void { }

  //////////////////////////////////////////

  @Output() timeOutput = new EventEmitter();

  public startWorkout() {
    console.log("workout starting in startWorkoutComponent");
    console.log("this.status = ", this.status);

    if (this.status) {
      this.status = false;
      this.interval = setInterval(() => {
        this.currentTime++;
      }, 1000)
    }
    else {
      this.status = true;
      console.log("in startWorkout() else");
    }

  }

  public stopWorkout() {
    this.status = true;
    clearInterval(this.interval);
    // this.totalWorkoutTime = this.currentTime;

    console.log("workout stopped");
    setNumber("workoutTime", this.currentTime);
    const workoutTime: number = getNumber("workoutTime");
    console.log("workout time: " + workoutTime);

    this.viewModel.set("totalWorkoutTime", this.currentTime);
    console.log(this.viewModel.get("totalWorkoutTime"));
    this.currentTime = 0;
    this.lastWorkoutTime = getNumber("workoutTime");

    /*
    this.allWorkouts.push([this.lastWorkoutTime, this.workoutType]);
    var allWorkoutsSize = this.allWorkouts.length; 
    this.viewModel.set("allWorkouts[" + allWorkoutsSize + "]", this.allWorkouts.pop);
    console.log(this.viewModel.get("allWorkouts[" + allWorkoutsSize + "]"));
    */
  }

  public selectWorkoutType(workoutType: any) { //HTMLButtonElement

    // setString("MannyLovesHisNewAndroid", workoutType.object.id);
    this.viewModel.set("workoutType", workoutType.object.id);
    console.log(this.viewModel.get("workoutType"));
    /*
    for (var button in WorkoutConstants.buttons) {
      if (workoutType.object.id === WorkoutConstants.buttons[button]) {
        workoutType.object.backgroundColor = "#787774";
      }
    }*/

    if (this.prevWorkoutType) {
      this.prevWorkoutType.object.backgroundColor = "#00658A";
    }
    this.prevWorkoutType = workoutType;
  }

}
