import { Component, OnInit } from '@angular/core';
import { setNumber } from '@nativescript/core/application-settings';
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
  public repSets: IRepSet[] = [{setNumber: 1, setReps: 3, setWeight: 50}, 
    {setNumber: 2, setReps: 2, setWeight: 100}];

  constructor(private workoutStorageService: WorkoutStorageService) { }

  ngOnInit(){
    this.workoutStorageService.saveWorkout(200, "curls", "3-22-2021", this.repSets, "fake notes");
  }



}
