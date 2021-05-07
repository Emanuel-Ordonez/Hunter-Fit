import { Component, OnInit } from '@angular/core';
import { setNumber } from '@nativescript/core/application-settings';
import { DateService } from './services/date/date.service';
import { IRepSetE } from './services/workout/workout-templates/set-interface/IRepSet-extreme';
import { Workout } from './services/workout/workout-templates/workout';
import { WorkoutStorageService } from './services/workout/workout-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public allWorkouts: Workout[] = [];
  public repSets: IRepSetE[] = [{setWorkoutType: "deadlifts", setNumber: 1, setReps: 3, setWeight: 50}, 
    {setWorkoutType: "benchpress", setNumber: 2, setReps: 2, setWeight: 100}];

  constructor(private workoutStorageService: WorkoutStorageService) { }

  ngOnInit(){
    const day = new DateService();
    //day.setDate(23,2,2021);
    //this.workoutStorageService.saveExtremeWorkout(200, day, this.repSets, "fake notes");
  }



}
