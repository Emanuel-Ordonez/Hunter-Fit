import { Component, OnInit } from '@angular/core';
import { setNumber } from '@nativescript/core/application-settings';
import { DateService } from './services/date/date.service';
import { IRepSet } from './services/IRepSet';
import { Workout } from './services/workout';
import { WorkoutStorageService } from './services/workout-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public allWorkouts: Workout[] = [];
  public repSets: IRepSet[] = [{setWorkoutType: "deadlifts", setNumber: 1, setReps: 3, setWeight: 50}, 
    {setWorkoutType: "benchpress", setNumber: 2, setReps: 2, setWeight: 100}];

  constructor(private workoutStorageService: WorkoutStorageService, private dateService: DateService) { }

  ngOnInit(){
    this.dateService.setDate(22,3,2021);
    this.workoutStorageService.saveWorkout(200, this.dateService, this.repSets, "fake notes");
  }



}
