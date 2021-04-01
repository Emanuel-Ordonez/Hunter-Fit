import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { getString, setString } from '@nativescript/core/application-settings';
import { EventData } from '@nativescript/core/data/observable';
import { ListPicker } from '@nativescript/core/ui/list-picker';
import { TextView } from '@nativescript/core/ui/text-view';
import { DateService } from '@src/app/services/date/date.service';
import { IRepSetWl } from '@src/app/services/IRepSet-weightlifting';
import { TimerService } from '@src/app/services/timer.service';
import { WorkoutStorageService } from '@src/app/services/workout-storage.service';
import { WorkoutConstants } from '@src/app/services/WorkoutConstants';

@Component({
  selector: 'app-weight-lifting-workout',
  moduleId: module.id,
  templateUrl: './weight-lifting-workout.component.tns.html',
  styleUrls: ['./weight-lifting-workout.component.tns.css']
})
export class WeightLiftingWorkoutComponent implements OnInit {

  public workoutType: any;
  public workoutTypeClass: string;
  private currentTime: number = 0;
  display;
  private interval;
  private status = true;
  private workoutNotes: string;

  tvtext = "";
  currentWorkout: string;
  private repSets: IRepSetWl[] = [];

  constructor(private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private workoutStorageService: WorkoutStorageService,
    private timerService: TimerService) { }

  ngOnInit(): void {
    this.getWorkoutType();
    this.startWorkout();
  }

  onTextChange(args: EventData) {
    const tv = args.object as TextView;
    this.workoutNotes = tv.text;
  }

  public getWorkoutType() {
    this.currentWorkout = getString("workoutTypeId");
    console.log("WorkoutType: " + this.currentWorkout);
  }

  public pauseTimer(pauseButton: any) {
    if (pauseButton.object.text == "Resume") {
      pauseButton.object.text = "Pause";
      pauseButton.object.backgroundColor = "#00658A";
      this.interval = setInterval(() => {
        this.currentTime++;
        this.display = this.timerService.formatTime(this.currentTime);
      }, 1000)
    }
    else {
      pauseButton.object.text = "Resume";
      pauseButton.object.backgroundColor = "#499c5c";
      clearInterval(this.interval);
    }
  }

  public startWorkout() {
    if (this.status) {
      this.status = false;
      this.interval = setInterval(() => {
        this.currentTime++;
        this.display = this.timerService.formatTime(this.currentTime);
      }, 1000)
    }
    else {
      this.status = true;
    }
  }

  public addAllRepSets(newRepSet: IRepSetWl[]) {
    this.repSets = newRepSet;
    console.log(this.repSets);
  }

  public stopWorkoutWeightLifting() {
    this.status = true;
    clearInterval(this.interval);

    let todaysDate = new DateService();
    console.log("StopWorkoutWeightlifting():", this.repSets);
    this.workoutStorageService.saveWeightliftingWorkout(this.currentTime, todaysDate, this.repSets, this.workoutNotes);
    this.currentTime = 0;
    this.routerExtensions.navigate(['/navigation']);
  }
}