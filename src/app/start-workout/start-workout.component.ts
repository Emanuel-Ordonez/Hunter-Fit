import { Component } from '@angular/core';
import { setString } from '@nativescript/core/application-settings';
import { RouterExtensions } from '@nativescript/angular';
import { WorkoutStorageService } from '@src/app/services/workout/workout-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-start-workout',
  moduleId: module.id,
  templateUrl: './start-workout.component.tns.html',
  styleUrls: ['./start-workout.component.tns.css']
})

export class StartWorkoutComponent {
  public workoutType: string;
  public workoutTypeClass: string;
  currentTime: number = 0;
  display;
  interval;
  public status = true;
  public prevWorkoutType: any;

  constructor(private routerExtensions: RouterExtensions, private activeRoute: ActivatedRoute, private workoutStorageService: WorkoutStorageService) { }

  public goBack(): void {
    this.routerExtensions.back();
  }

  public selectWorkoutType(workoutTypeButton: any) {
    this.workoutTypeClass = workoutTypeButton.object.class;
    this.workoutType = workoutTypeButton.object.text;

    workoutTypeButton.object.backgroundColor = "#787774";

    if (this.prevWorkoutType) {
      this.prevWorkoutType.object.backgroundColor = "#00658A";
      if(this.prevWorkoutType.object.text == this.workoutType){
        this.workoutTypeClass = null;
        this.workoutType = null;
        this.prevWorkoutType = null;
      }
      else{
        this.prevWorkoutType = workoutTypeButton;
      }
    }
    else{
      this.prevWorkoutType = workoutTypeButton;
    }
  }

  public startWorkout() {
    switch (this.workoutTypeClass) {
      case 'cardioWorkoutButton':
        setString("workoutType", this.workoutType);
        this.routerExtensions.navigate(['/cardioWorkout']);
        this.status = true;
        break;

      case 'wlWorkoutButton':
        setString("workoutType", this.workoutType);
        this.routerExtensions.navigate(['/weightLiftingWorkout']);
        this.status = true;
        break;
        
      case 'extremeWorkoutButton':
        setString("workoutType", this.workoutType);
        this.routerExtensions.navigate(['/extremeWorkout']);
        this.status = true;
        break;

      default:
        this.status = false;
        console.log('in else: ' + this.workoutTypeClass);
        alert("You must select a workout type before proceeding.");
        break;
    }
  }
}
