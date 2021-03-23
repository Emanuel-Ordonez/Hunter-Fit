import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { getNumber, getString, setNumber, setString } from '@nativescript/core/application-settings';
import { EventData, Observable } from '@nativescript/core/data/observable';
import { ListPicker } from '@nativescript/core/ui/list-picker';
import { TextView } from '@nativescript/core/ui/text-view';
import { IRepSet } from '@src/app/services/IRepSet';
import { WorkoutStorageService } from '@src/app/services/workout-storage.service';
import { WorkoutConstants } from '@src/app/services/WorkoutConstants';
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
  private currentTime: number = 0;
  display;
  private interval;
  private status = true;
  private prevWorkoutType: any;
  private workoutNotes: string;
  public weight_lifting_workouts: Array<string> = WorkoutConstants.weight_lifting_workouts;

  tvtext = "";
  currentWorkout: string;
  private repSets: IRepSet[] = [];

  constructor(private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private workoutStorageService: WorkoutStorageService) { }

  ngOnInit(): void {
    this.startWorkout();
    // this.getWorkoutType();
  }

  public onSelectedIndexChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    // console.log(`index: ${picker.selectedIndex}; item ${this.weight_lifting_workouts[picker.selectedIndex]}`);
    this.currentWorkout = `${this.weight_lifting_workouts[picker.selectedIndex]}`;
    setString("workoutTypeId", this.currentWorkout);
    console.log("WorkoutType: " + this.currentWorkout);
  }

  onTextChange(args: EventData) {
    const tv = args.object as TextView;
    this.workoutNotes = tv.text;
    // console.log(tv.text);
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
        this.display = this.formatTime(this.currentTime);
      }, 1000)
    }
    else {
      pauseButton.object.text = "Resume";
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
    const hours: number = Math.floor(value / 3600);
    value -= (hours * 3600);
    const minutes: number = Math.floor(value / 60);
    value -= (minutes * 60);
    return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(value).padStart(2, '0');
  }


  public addAllRepSets(newRepSet: IRepSet[]) {
    this.repSets = newRepSet;
    console.log(this.repSets);
  }
  // public addRepSet(newRepSet: IRepSet){
  //   this.repSets.push(newRepSet);
  //   console.log(this.repSets);
  // }

  public stopWorkoutWeightLifting() {
    this.status = true;
    clearInterval(this.interval);

    const endDate = this.getCurrentDate();

    // const formattedTime: string = this.formatTime(this.currentTime);
    console.log("StopWorkoutWeightlifting():", this.repSets);
    this.workoutStorageService.saveWorkout(formattedTime, endDate, this.repSets, this.workoutNotes);
    this.currentTime = 0;
    this.routerExtensions.navigate(['/navigation']);
  }

  private getCurrentDate() {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    return `${currentMonth}-${currentDay}-${currentYear}`;
  }
}