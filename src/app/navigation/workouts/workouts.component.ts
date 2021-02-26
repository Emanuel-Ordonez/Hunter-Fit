import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NSRouterLink, RouterExtensions } from '@nativescript/angular';
import { getNumber, getString, setNumber } from '@nativescript/core/application-settings';
import { EventData, Observable } from '@nativescript/core/data/observable';
import { ListPicker } from '@nativescript/core/ui/list-picker';
import { WorkoutConstants } from '../../services/WorkoutConstants';

@Component({
  selector: 'app-workouts',
  moduleId: module.id,
  templateUrl: './workouts.component.tns.html',
  styleUrls: ['./workouts.component.tns.css']
})
export class WorkoutsComponent implements OnInit {

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

  constructor(private routerExtensions: RouterExtensions){}

  ngOnInit(){
    // this.viewModel.set("workoutType", "");
  }

  //////////////////////////////////////////

  @Output() timeOutput = new EventEmitter();

  public startWorkout() {
    this.callCurrentWorkout();

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

  public callCurrentWorkout(){
    var selectedWorkout = this.viewModel.get("workoutTypeClass");
    console.log(this.viewModel.get("workoutTypeClass"));

    if(selectedWorkout == 'cardioWorkoutButton'){
      this.goForward("cardio-workout");
      this.status = true;
    } 
    else if(selectedWorkout == 'wlWorkoutButton'){ 
      this.goForward("weight-lifting-workout");
      this.status = true;
    }
    else {
      this.status = false;
      console.log('in else: ' + selectedWorkout);
      alert("You must select a workout type before proceeding.");
    }
  }

  public stopWorkout() {
    this.status = true;
    clearInterval(this.interval);

    console.log("workout stopped");
    setNumber("workoutTime", this.currentTime);
    const workoutTime: number = getNumber("workoutTime");
    console.log("workout time: " + workoutTime);

    this.viewModel.set("totalWorkoutTime", this.currentTime);
    console.log(this.viewModel.get("totalWorkoutTime"));
    this.currentTime = 0;
    this.lastWorkoutTime = getNumber("workoutTime");

    //CONSIDER: having the UI page go back to the navigation/workouts page>
  }

  public selectWorkoutType(workoutType: any) { //HTMLButtonElement

    this.viewModel.set("workoutTypeId", workoutType.object.id);
    this.viewModel.set("workoutTypeClass", workoutType.object.class);
    console.log(this.viewModel.get("workoutTypeId"));
    for (var button in WorkoutConstants.buttons) {
      if (workoutType.object.id === WorkoutConstants.buttons[button]) {
        workoutType.object.backgroundColor = "#787774";
      }
    }

    if (this.prevWorkoutType) {
      this.prevWorkoutType.object.backgroundColor = "#00658A";
    }
    this.prevWorkoutType = workoutType;
  }

  ////////////////////////////////////////////////////////////////

  public goBack(): void {
    this.routerExtensions.back(); //doesnt work yet
    console.log("going back!");
  }

  public goForward(page: any): void {
    this.routerExtensions.navigate(page); //doesnt work yet
  }
}

