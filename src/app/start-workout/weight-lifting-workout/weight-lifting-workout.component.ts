import { Component, OnInit } from '@angular/core';
import { getString } from '@nativescript/core/application-settings';
import { EventData } from '@nativescript/core/data/observable';
import { TextView } from '@nativescript/core/ui/text-view';
import { WorkoutsComponent } from '../../navigation/workouts/workouts.component';
import { StartWorkoutComponent } from '../start-workout.component';

@Component({
  selector: 'app-weight-lifting-workout',
  moduleId: module.id,
  templateUrl: './weight-lifting-workout.component.tns.html',
  styleUrls: ['./weight-lifting-workout.component.tns.css']
})
export class WeightLiftingWorkoutComponent extends StartWorkoutComponent implements OnInit {

  tvtext = "";
  currentWorkout: string;

  ngOnInit(): void {
    this.startWorkout();
    this.getWorkoutType();
  }

  onTextChange(args: EventData) {
    const tv = args.object as TextView;
    // console.log(tv.text);
  }

  public getWorkoutType(){
    this.currentWorkout = getString("workoutTypeId");
    console.log("WorkoutType: "+this.currentWorkout);
  }
}