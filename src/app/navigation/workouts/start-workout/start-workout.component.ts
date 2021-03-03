import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getNumber, setNumber, setString, getString } from '@nativescript/core/application-settings';
import { NSRouterLink, RouterExtensions } from '@nativescript/angular';
import { EventData, Observable } from '@nativescript/core/data/observable';
import { ListPicker } from '@nativescript/core/ui/list-picker';
import { WorkoutsComponent } from '../workouts.component';
import { WorkoutConstants } from '@src/app/services/WorkoutConstants';
import { WorkoutStorageService } from '@src/app/services/workout-storage.service';

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
  interval;
  public status = true;
  public prevWorkoutType: any;

  constructor(private routerExtensions: RouterExtensions, private workoutStorageService: WorkoutStorageService) { }

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
    setString("workoutTypeId", this.workoutType);

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

  ///////////

  public startWorkout() {
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
    this.workoutStorageService.saveWorkout(getNumber("workoutTime"), getString("workoutTypeId"));
    this.currentTime = 0;
  }
}
