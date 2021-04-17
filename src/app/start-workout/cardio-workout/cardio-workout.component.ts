import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { getString } from '@nativescript/core/application-settings';
import { EventData } from '@nativescript/core/data/observable';
import { TextView } from '@nativescript/core/ui/text-view';
import { DateService } from '@src/app/services/date/date.service';
import { TimerService } from '@src/app/services/timer.service';
import { WorkoutStorageService } from '@src/app/services/workout/workout-storage.service';
import { WorkoutsComponent } from '../../navigation/workouts/workouts.component';
import { StartWorkoutComponent } from '../start-workout.component';

@Component({
  selector: 'app-cardio-workout',
  moduleId: module.id,
  templateUrl: './cardio-workout.component.tns.html',
  styleUrls: ['./cardio-workout.component.tns.css']
})
export class CardioWorkoutComponent implements OnInit {

  public workoutType: any;
  public workoutTypeClass: string;
  private currentTime: number = 0;
  display;
  private interval;
  private status = true;
  private workoutNotes: string;
  private distance: number = 0;

  tvtext = "";
  currentWorkout: string;

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

  public stopCardioWorkout() {
    this.status = true;
    clearInterval(this.interval);

    let todaysDate = new DateService();
    this.workoutStorageService.saveCardioWorkout(this.currentWorkout, this.currentTime, todaysDate, this.distance, this.workoutNotes);
    this.currentTime = 0;
    this.routerExtensions.navigate(['/navigation']);
  }
}