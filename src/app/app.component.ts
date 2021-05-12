import { Component, OnInit } from '@angular/core';
import { setNumber } from '@nativescript/core/application-settings';
import { DateService } from './services/date/date.service';
import { IRepSetE } from './services/workout/workout-templates/set-interface/IRepSet-extreme';
import { Workout } from './services/workout/workout-templates/workout';
import { WorkoutStorageService } from './services/workout/workout-storage.service';
import { IRepSetWl } from './services/workout/workout-templates/set-interface/IRepSet-weightlifting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private workoutStorageService: WorkoutStorageService) { }

  ngOnInit(){
    var eRepSets: IRepSetE[] = [{setWorkoutType: "deadlifts", setNumber: 1, setReps: 3, setWeight: 50}, 
      {setWorkoutType: "benchpress", setNumber: 2, setReps: 2, setWeight: 100}];

    var wRepSets: IRepSetWl[] = [{setNumber: 1, setReps: 20, setWeight: 50}, 
      {setNumber: 2, setReps: 10, setWeight: 200}];

    var day = new DateService();
    day.setDate(2,1,2021);
    this.workoutStorageService.saveExtremeWorkout(2000, day, eRepSets, "Did a good workout today");

    var eday1 = new DateService();
    eday1.setDate(12,1,2021);
    this.workoutStorageService.saveExtremeWorkout(3000, eday1, eRepSets, "Another day of work");
    
    var wday1 = new DateService();
    wday1.setDate(13,1,2021);
    this.workoutStorageService.saveWeightliftingWorkout("Benchpress", 3000, wday1, wRepSets, "Another day of work");

    var cday1 = new DateService();
    cday1.setDate(14,1,2021);
    this.workoutStorageService.saveCardioWorkout("Benchpress", 3000, cday1, 1.2, "Another day of work");


    var day2 = new DateService();
    day2.setDate(22,1,2021);
    this.workoutStorageService.saveExtremeWorkout(4000, day2, eRepSets, "Keep up the work");

    var wday2 = new DateService();
    wday2.setDate(23,1,2021);
    this.workoutStorageService.saveWeightliftingWorkout("Squats", 4000, wday2, wRepSets, "Keep up the work");

    var cday2 = new DateService();
    cday2.setDate(24,1,2021);
    this.workoutStorageService.saveCardioWorkout("Squats", 4000, cday2, 3, "Keep up the work");

  
    var day3 = new DateService();
    day3.setDate(2,2,2021);
    this.workoutStorageService.saveExtremeWorkout(3200, day3, eRepSets, "Great Job");

    var wday3 = new DateService();
    wday3.setDate(3,2,2021);
    this.workoutStorageService.saveWeightliftingWorkout("Curls", 3200, wday3, wRepSets, "Great Job");

    var cday3 = new DateService();
    cday3.setDate(4,2,2021);
    this.workoutStorageService.saveCardioWorkout("Curls", 3200, cday3, 2.4, "Great Job");


    var day4 = new DateService();
    day4.setDate(12,2,2021);
    this.workoutStorageService.saveExtremeWorkout(2800, day4, eRepSets, "Good stuff");

    var wday4 = new DateService();
    wday4.setDate(13,2,2021);
    this.workoutStorageService.saveWeightliftingWorkout("Deadlifts", 2800, wday4, wRepSets, "Good stuff");

    var cday4 = new DateService();
    cday4.setDate(14,2,2021);
    this.workoutStorageService.saveCardioWorkout("Deadlifts", 2800, cday4, 2.8, "Good stuff");


    var day5 = new DateService();
    day5.setDate(22,2,2021);
    this.workoutStorageService.saveExtremeWorkout(2400, day5, eRepSets, "Well done");

    var wday5 = new DateService();
    wday5.setDate(23,2,2021);
    this.workoutStorageService.saveWeightliftingWorkout("Rows", 2400, wday5, wRepSets, "Well done");
    
    var cday5 = new DateService();
    cday5.setDate(24,2,2021);
    this.workoutStorageService.saveCardioWorkout("Rows", 2400, cday5, 1.7, "Well done");


    var day6 = new DateService();
    day6.setDate(2,3,2021);
    this.workoutStorageService.saveExtremeWorkout(3700, day6, eRepSets, "Feeling good today");

    var wday6 = new DateService();
    wday6.setDate(3,3,2021);
    this.workoutStorageService.saveWeightliftingWorkout("Pushups", 3700, wday6, wRepSets, "Feeling good today");

    var cday6 = new DateService();
    cday6.setDate(4,3,2021);
    this.workoutStorageService.saveCardioWorkout("Pushups", 3700, cday6, 0.6, "Feeling good today");


    var day7 = new DateService();
    day7.setDate(27,3,2021);
    this.workoutStorageService.saveExtremeWorkout(4200, day7, eRepSets, "Another day");

    var wday7 = new DateService();
    wday7.setDate(28,3,2021);
    this.workoutStorageService.saveWeightliftingWorkout("Bench", 4200, wday7, wRepSets, "Another day");

    var cday7 = new DateService();
    cday7.setDate(30,3,2021);
    this.workoutStorageService.saveCardioWorkout("Bench", 4200, cday7, 4.2, "Another day");


    var day8 = new DateService();
    day8.setDate(12,4,2021);
    this.workoutStorageService.saveExtremeWorkout(4100, day8, eRepSets, "Took it easy today");

    var wday8 = new DateService();
    wday8.setDate(13,4,2021);
    this.workoutStorageService.saveWeightliftingWorkout("Crunshes", 4100, wday8, wRepSets, "Took it easy today");

    var cday8 = new DateService();
    cday8.setDate(14,4,2021);
    this.workoutStorageService.saveCardioWorkout("Crunshes", 4100, cday8, 4.3, "Took it easy today");


    var day9 = new DateService();
    day9.setDate(24,4,2021);
    this.workoutStorageService.saveExtremeWorkout(5000, day9, eRepSets, "Well done");

    var wday9 = new DateService();
    wday9.setDate(25,4,2021);
    this.workoutStorageService.saveWeightliftingWorkout("Planks", 5000, wday9, wRepSets, "Well done");

    var cday9 = new DateService();
    cday9.setDate(26,4,2021);
    this.workoutStorageService.saveCardioWorkout("Planks", 5000, cday9, 2.5, "Well done");


    var day10 = new DateService();
    day10.setDate(10,5,2021);
    this.workoutStorageService.saveExtremeWorkout(5500, day10, eRepSets, "Good job");
    
    var cday10 = new DateService();
    cday10.setDate(14,5,2021);
    this.workoutStorageService.saveCardioWorkout("Powerclean", 5500, cday10, 3.2, "Good job");
  }

}
