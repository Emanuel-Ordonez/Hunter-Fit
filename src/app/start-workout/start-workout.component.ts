import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getNumber, setNumber, setString, getString } from '@nativescript/core/application-settings';
import { NSRouterLink, RouterExtensions } from '@nativescript/angular';
import { EventData, Observable } from '@nativescript/core/data/observable';
import { ListPicker } from '@nativescript/core/ui/list-picker';
import { WorkoutsComponent } from '../navigation/workouts/workouts.component';
import { WorkoutConstants } from '@src/app/services/WorkoutConstants';
import { WorkoutStorageService } from '@src/app/services/workout-storage.service';
import { path } from '@nativescript/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-start-workout',
  moduleId: module.id,
  templateUrl: './start-workout.component.tns.html',
  styleUrls: ['./start-workout.component.tns.css']
})

export class StartWorkoutComponent {
  public workoutType: any;
  public workoutTypeClass: string;
  currentTime: number = 0;
  display;
  interval;
  public status = true;
  public prevWorkoutType: any;

  constructor(private routerExtensions: RouterExtensions, private activeRoute: ActivatedRoute, private workoutStorageService: WorkoutStorageService) { }

  public onSelectedIndexChanged(args: EventData) {
    const picker = <ListPicker>args.object;
  }

  public goBack(): void {
    this.routerExtensions.back();
  }

  //////////////////////////////////////////

  public selectWorkoutType(workoutTypeButton: any) { //workoutTypeButton: HTMLButtonElement

    this.workoutTypeClass = workoutTypeButton.object.class;
    this.workoutType = workoutTypeButton.object.id;
    // setString("workoutTypeId", this.workoutType);

    for (var button in WorkoutConstants.buttons) {
      if (this.workoutType === WorkoutConstants.buttons[button]) {
        workoutTypeButton.object.backgroundColor = "#787774";
      }
    }

    if (this.prevWorkoutType) {
      this.prevWorkoutType.object.backgroundColor = "#00658A";
    }
    this.prevWorkoutType = workoutTypeButton;
  }
  
  public pauseTimer(pauseButton: any) {
    if (pauseButton.object.text=="Resume"){
      pauseButton.object.text="Pause";
      pauseButton.object.backgroundColor = "#00658A";
      this.interval = setInterval(() => {
        this.currentTime++;
        this.display = this.formatTime(this.currentTime);
      }, 1000)
    }
    else{
      pauseButton.object.text="Resume";
      pauseButton.object.backgroundColor = "#499c5c";
      clearInterval(this.interval);
    }
  }


  public startWorkout() {
    if (this.status) {
      this.status = false;
      this.interval = setInterval(() => {
        this.currentTime++;
        this.display = this.formatTime(this.currentTime);
      }, 1000)
    }
    else {
      this.status = true;
      console.log("in startWorkout() else");
    }
  }

  public formatTime(value: number): string {
    const minutes: number = Math.floor(value/60);
    return minutes + ':' + String(value - minutes * 60).padStart(2, '0');
  }
  

  public callCurrentWorkout() {
    switch (this.workoutTypeClass) {
      case 'cardioWorkoutButton':
        this.routerExtensions.navigate(['/cardioWorkout']);
        this.status = true;
        break;

      case 'wlWorkoutButton':
        this.routerExtensions.navigate(['/weightLiftingWorkout']);
        this.status = true;
        break;

      default:
        this.status = false;
        console.log('in else: ' + this.workoutTypeClass);
        alert("You must select a workout type before proceeding.");
        break;
    }
  }

  ///////////

  public stopWorkout() {
    this.status = true;
    clearInterval(this.interval);

    setNumber("workoutTime", this.currentTime);
    this.currentTime = 0;
    this.routerExtensions.navigate(['/navigation']);
  }
}
