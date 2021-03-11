import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { getNumber, getString, setNumber } from '@nativescript/core/application-settings';
import { EventData } from '@nativescript/core/data/observable';
import { TextView } from '@nativescript/core/ui/text-view';
import { IRepSet } from '@src/app/services/IRepSet';
import { WorkoutStorageService } from '@src/app/services/workout-storage.service';
import { WorkoutsComponent } from '../../navigation/workouts/workouts.component';
import { StartWorkoutComponent } from '../start-workout.component';

@Component({
  selector: 'app-weight-lifting-workout',
  moduleId: module.id,
  templateUrl: './weight-lifting-workout.component.tns.html',
  styleUrls: ['./weight-lifting-workout.component.tns.css']
})
export class WeightLiftingWorkoutComponent implements OnInit {

  public workoutType: any;
  public workoutTypeClass: string;
  currentTime: number = 0;
  display;
  interval;
  public status = true;
  public prevWorkoutType: any;

  tvtext = "";
  currentWorkout: string;
  repSets: IRepSet[] = [];

  constructor(private routerExtensions: RouterExtensions, 
    private activeRoute: ActivatedRoute, 
    private workoutStorageService: WorkoutStorageService) { }

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

  ///////////

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

  public addRepSet(newRepSet: IRepSet){
    this.repSets.push(newRepSet);
    console.log(this.repSets);
  }

  public stopWorkoutWeightLifting() {

    this.status = true;
    clearInterval(this.interval);

    setNumber("workoutTime", this.currentTime);
    this.workoutStorageService.saveWorkout(getNumber("workoutTime"), getString("workoutTypeId"), this.repSets);
    this.currentTime = 0;
    this.routerExtensions.navigate(['/navigation']);
  }
}