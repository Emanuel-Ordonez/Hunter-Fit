import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { setString } from '@nativescript/core/application-settings';
import { EventData} from '@nativescript/core/data/observable';
import { ListPicker } from '@nativescript/core/ui/list-picker';
import { TextView } from '@nativescript/core/ui/text-view';
import { DateService } from '@src/app/services/date/date.service';
import { IRepSetE } from '@src/app/services/workout/workout-templates/set-interface/IRepSet-extreme';
import { TimerService } from '@src/app/services/timer/timer.service';
import { WorkoutStorageService } from '@src/app/services/workout/workout-storage.service';
import { WorkoutConstants } from '@src/app/services/workout/WorkoutConstants';

@Component({
  selector: 'app-extreme-workout',
  templateUrl: './extreme-workout.component.html',
  styleUrls: ['./extreme-workout.component.css']
})
export class ExtremeWorkoutComponent implements OnInit {
  
  private currentTime: number = 0;
  public display;
  private interval;
  private status = true;
  private workoutNotes: string;
  public weight_lifting_workouts: Array<string> = WorkoutConstants.list_weight_lifting_workouts;
  public currentWorkout: string;
  private repSets: IRepSetE[] = [];

  constructor(private routerExtensions: RouterExtensions,
    private workoutStorageService: WorkoutStorageService,
    private timerService: TimerService) { }

  ngOnInit(): void {
    this.startWorkout();
  }

  public getNotes(){
    return this.workoutNotes;
  }

  public onSelectedIndexChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    this.currentWorkout = `${this.weight_lifting_workouts[picker.selectedIndex]}`;
    setString("workoutTypeId", this.currentWorkout);
    console.log("WorkoutType: " + this.currentWorkout);
  }

  public onTextChange(args: EventData) {
    const tv = args.object as TextView;
    this.workoutNotes = tv.text;
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
