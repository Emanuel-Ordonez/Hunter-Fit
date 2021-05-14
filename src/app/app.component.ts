import { Component, OnInit } from '@angular/core';
import { setNumber } from '@nativescript/core/application-settings';
import { DateService } from './services/date/date.service';
import { IRepSetE } from './services/workout/workout-templates/set-interface/IRepSet-extreme';
import { Workout } from './services/workout/workout-templates/workout';
import { WorkoutStorageService } from './services/workout/workout-storage.service';
import { IRepSetWl } from './services/workout/workout-templates/set-interface/IRepSet-weightlifting';
import { GoalsService } from './services/goals/goals.service';
import { MonthlyGoal } from './services/goals/goalTypes/IGoal-monthly';
import { DailyGoal } from './services/goals/goalTypes/IGoal-daily';
import { YearlyGoal } from './services/goals/goalTypes/IGoal-yearly';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private workoutStorageService: WorkoutStorageService, private goalsService: GoalsService) { }

  ngOnInit(){
    this.setDummyWorkout();
    this.setDummyGoals();
    this.setDummyCompleteGoal();
  }

  private setDummyWorkout(){
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

  private setDummyGoals(){
    this.goalsService.saveDailyGoal("Walk 2 miles today");
    this.goalsService.saveDailyGoal("Lift 300 pounds today");


    var mday1 = new DateService();
    mday1.setDate(1,5,2021);
    this.goalsService.setMonthlyGoal("Walk 2 per day miles this month", mday1);
    
    var mday2 = new DateService();
    mday2.setDate(3,5,2021);
    this.goalsService.setMonthlyGoal("Walk at least 50 miles this month", mday2);
    
    var mday3 = new DateService();
    mday3.setDate(7,5,2021);
    this.goalsService.setMonthlyGoal("Lift 3000 pounds this month", mday3);
    
    var mday4 = new DateService();
    mday4.setDate(10,5,2021);
    this.goalsService.setMonthlyGoal("Loss 5 pounds this month", mday4);

    
    
    var yday1 = new DateService();
    yday1.setDate(4,1,2021);
    this.goalsService.setYealyGoal("Cardio for 1hr each day this year", yday1);
    
    var yday2 = new DateService();
    yday2.setDate(18,1,2021);
    this.goalsService.setYealyGoal("Lift for 30mins each day this year", yday2);
    
    var yday3 = new DateService();
    yday3.setDate(11,2,2021);
    this.goalsService.setYealyGoal("Lift 30000 this year", yday3);
    
    var yday4 = new DateService();
    yday4.setDate(27,2,2021);
    this.goalsService.setYealyGoal("Keep a positive metality this year", yday4);
    
    var yday5 = new DateService();
    yday5.setDate(9,3,2021);
    this.goalsService.setYealyGoal("Cardio for 1hr each day this year", yday5);
    
    var yday6 = new DateService();
    yday6.setDate(23,3,2021);
    this.goalsService.setYealyGoal("Cardio for 1hr each day this year", yday6);
    
    var yday7 = new DateService();
    yday7.setDate(10,4,2021);
    this.goalsService.setYealyGoal("Cardio for 1hr each day this year", yday7);
  }

  private setDummyCompleteGoal(){
    var day1 = new DateService();
    day1.setDate(1,1,2021);
    var dayGoal1: DailyGoal = {goalDType: "Daily", goalDetails: "Lift 200 pounds today", goalSetDate: day1, goalMetDate: day1};
    this.goalsService.setDataCompletedGoal(dayGoal1);

    var day2 = new DateService();
    day2.setDate(20,1,2021);
    var dayGoal2: DailyGoal = {goalDType: "Daily", goalDetails: "Run 1 mile today", goalSetDate: day2, goalMetDate: day2};
    this.goalsService.setDataCompletedGoal(dayGoal2);

    var day3 = new DateService();
    day3.setDate(3,2,2021);
    var dayGoal3: DailyGoal = {goalDType: "Daily", goalDetails: "Relax after hard day today", goalSetDate: day3, goalMetDate: day3};
    this.goalsService.setDataCompletedGoal(dayGoal3);

    var day4 = new DateService();
    day4.setDate(11,3,2021);
    var dayGoal4: DailyGoal = {goalDType: "Daily", goalDetails: "Leg day today", goalSetDate: day4, goalMetDate: day4};
    this.goalsService.setDataCompletedGoal(dayGoal4);
    

    var m1day1 = new DateService();
    m1day1.setDate(1,1,2021);
    var m2day1 = new DateService();
    m2day1.setDate(25,1,2021);
    var monthGoal1: MonthlyGoal = {goalMType: "Monthly", goalDetails: "Walk 40 miles this month", goalSetDate: m1day1, goalMetDate: m2day1};
    this.goalsService.setDataCompletedGoal(monthGoal1);

    var m1day2 = new DateService();
    m1day2.setDate(4,2,2021);
    var m2day2 = new DateService();
    m2day2.setDate(26,2,2021);
    var monthGoal2: MonthlyGoal = {goalMType: "Monthly", goalDetails: "Swim 5 miles this month", goalSetDate: m1day2, goalMetDate: m2day2};
    this.goalsService.setDataCompletedGoal(monthGoal2);

    var m1day3 = new DateService();
    m1day3.setDate(2,3,2021);
    var m2day3 = new DateService();
    m2day3.setDate(21,3,2021);
    var monthGoal3: MonthlyGoal = {goalMType: "Monthly", goalDetails: "Squat max 200 pounds this month", goalSetDate: m1day3, goalMetDate: m2day3};
    this.goalsService.setDataCompletedGoal(monthGoal3);

    var m1day4 = new DateService();
    m1day4.setDate(5,3,2021);
    var m2day4 = new DateService();
    m2day4.setDate(29,3,2021);
    var monthGoal4: MonthlyGoal = {goalMType: "Monthly", goalDetails: "Deadlift 2000 pounds this month", goalSetDate: m1day4, goalMetDate: m2day4};
    this.goalsService.setDataCompletedGoal(monthGoal4);

    var m1day5 = new DateService();
    m1day5.setDate(3,4,2021);
    var m2day5 = new DateService();
    m2day5.setDate(23,4,2021);
    var monthGoal5: MonthlyGoal = {goalMType: "Monthly", goalDetails: "Powerclean 150 pounds 30 reps this month", goalSetDate: m1day5, goalMetDate: m2day5};
    this.goalsService.setDataCompletedGoal(monthGoal5);


    var y1day1 = new DateService();
    y1day1.setDate(3,1,2020);
    var y2day1 = new DateService();
    y2day1.setDate(25,9,2020);
    var yearGoal1: YearlyGoal = {goalYType: "Yearly", goalDetails: "Cardio for 1hr each day this year", goalSetDate: y1day1, goalMetDate: y2day1};
    this.goalsService.setDataCompletedGoal(yearGoal1);

    var y1day2 = new DateService();
    y1day2.setDate(23,1,2020);
    var y2day2 = new DateService();
    y2day2.setDate(17,10,2020);
    var yearGoal2: YearlyGoal = {goalYType: "Yearly", goalDetails: "Cardio for 1hr each day this year", goalSetDate: y1day2, goalMetDate: y2day2};
    this.goalsService.setDataCompletedGoal(yearGoal2);

    var y1day3 = new DateService();
    y1day3.setDate(20,1,2020);
    var y2day3 = new DateService();
    y2day3.setDate(30,11,2020);
    var yearGoal3: YearlyGoal = {goalYType: "Yearly", goalDetails: "Cardio for 1hr each day this year", goalSetDate: y1day3, goalMetDate: y2day3};
    this.goalsService.setDataCompletedGoal(yearGoal3);

    var y1day4 = new DateService();
    y1day4.setDate(30,1,2020);
    var y2day4 = new DateService();
    y2day4.setDate(25,12,2020);
    var yearGoal4: YearlyGoal = {goalYType: "Yearly", goalDetails: "Cardio for 1hr each day this year", goalSetDate: y1day4, goalMetDate: y2day4};
    this.goalsService.setDataCompletedGoal(yearGoal4);

    var y1day5 = new DateService();
    y1day5.setDate(1,1,2021);
    var y2day5 = new DateService();
    y2day5.setDate(30,4,2021);
    var yearGoal5: YearlyGoal = {goalYType: "Yearly", goalDetails: "Cardio for 1hr each day this year", goalSetDate: y1day5, goalMetDate: y2day5};
    this.goalsService.setDataCompletedGoal(yearGoal5);
  }
}
