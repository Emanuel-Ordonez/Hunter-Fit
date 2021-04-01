import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { getString, setString } from '@nativescript/core/application-settings';
import { EventData} from '@nativescript/core/data/observable';
import { ListPicker } from '@nativescript/core/ui/list-picker';
import { TextView } from '@nativescript/core/ui/text-view';
import { DateService } from '@src/app/services/date/date.service';
import { IRepSetE } from '@src/app/services/IRepSet-extreme';
import { TimerService } from '@src/app/services/timer.service';
import { WorkoutStorageService } from '@src/app/services/workout-storage.service';
import { WorkoutConstants } from '@src/app/services/WorkoutConstants';

@Component({
  selector: 'app-extreme-workout',
  templateUrl: './extreme-workout.component.html',
  styleUrls: ['./extreme-workout.component.css']
})
export class ExtremeWorkoutComponent implements OnInit {
  public workoutType: any;
  public workoutTypeClass: string;
  private currentTime: number = 0;
  display;
  private interval;
  private status = true;
  private workoutNotes: string;
  public weight_lifting_workouts: Array<string> = WorkoutConstants.weight_lifting_workouts;

  tvtext = "";
  currentWorkout: string;
  private repSets: IRepSetE[] = [];

  constructor(private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private workoutStorageService: WorkoutStorageService,
    private timerService: TimerService) { }

  ngOnInit(): void {
    this.startWorkout();
  }

  public onSelectedIndexChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    this.currentWorkout = `${this.weight_lifting_workouts[picker.selectedIndex]}`;
    setString("workoutTypeId", this.currentWorkout);
    console.log("WorkoutType: " + this.currentWorkout);
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
      console.log("in startWorkout() else");
    }
  }

  public addAllRepSets(newRepSet: IRepSetE[]) {
    this.repSets = newRepSet;
    console.log(this.repSets);
  }

  public stopWorkoutWeightLifting() {
    this.status = true;
    clearInterval(this.interval);

    let todaysDate = new DateService();
    this.workoutStorageService.saveExtremeWorkout(this.currentTime, todaysDate, this.repSets, this.workoutNotes);
    this.currentTime = 0;
    this.routerExtensions.navigate(['/navigation']);
  }
}
