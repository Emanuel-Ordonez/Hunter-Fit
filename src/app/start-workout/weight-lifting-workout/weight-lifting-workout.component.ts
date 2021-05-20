import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { getString } from '@nativescript/core/application-settings';
import { EventData } from '@nativescript/core/data/observable';
import { TextView } from '@nativescript/core/ui/text-view';
import { DateService } from '@src/app/services/date/date.service';
import { IRepSetWl } from '@src/app/services/workout/workout-templates/set-interface/IRepSet-weightlifting';
import { TimerService } from '@src/app/services/timer/timer.service';
import { WorkoutStorageService } from '@src/app/services/workout/workout-storage.service';

@Component({
  selector: 'app-weight-lifting-workout',
  moduleId: module.id,
  templateUrl: './weight-lifting-workout.component.tns.html',
  styleUrls: ['./weight-lifting-workout.component.tns.css']
})
export class WeightLiftingWorkoutComponent implements OnInit {

  private currentTime: number = 0;
  public display;
  private interval;
  private status = true;
  private workoutNotes: string;
  public currentWorkout: string;
  private repSets: IRepSetWl[] = [];

  constructor(private routerExtensions: RouterExtensions,
    private workoutStorageService: WorkoutStorageService,
    private timerService: TimerService) { }

  ngOnInit(): void {
    this.getWorkoutType();
    this.startWorkout();
  }

  public onTextChange(args: EventData) {
    const tv = args.object as TextView;
    this.workoutNotes = tv.text;
  }

  public getWorkoutType() {
    this.currentWorkout = getString("workoutType");
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
    this.workoutStorageService.saveWeightliftingWorkout(this.currentWorkout, this.currentTime, todaysDate, this.repSets, this.workoutNotes);
    this.currentTime = 0;
    this.routerExtensions.navigate(['/navigation']);
  }
}