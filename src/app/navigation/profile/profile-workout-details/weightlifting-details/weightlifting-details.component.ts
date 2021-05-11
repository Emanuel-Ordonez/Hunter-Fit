import { Component, OnInit } from '@angular/core';
import { DateService } from '@src/app/services/date/date.service';
import { IRepSetWl } from '@src/app/services/workout/workout-templates/set-interface/IRepSet-weightlifting';
//import { IRepSet } from '@src/app/services/IRepSet-extreme';
import { TimerService } from '@src/app/services/timer.service';
import { Workout } from '@src/app/services/workout/workout-templates/workout';
import { WorkoutStorageService } from '@src/app/services/workout/workout-storage.service';
import { WeightLiftingWorkout } from '@src/app/services/workout/workout-templates/weightlifting-workout'
import { ExtremeWorkout } from '@src/app/services/workout/workout-templates/extreme-workout';
import { IRepSetE } from '@src/app/services/workout/workout-templates/set-interface/IRepSet-extreme';

@Component({
  selector: 'app-weightlifting-details',
  templateUrl: './weightlifting-details.component.tns.html',
  styleUrls: ['./weightlifting-details.component.tns.css']
})
export class WeightliftingDetailsComponent implements OnInit {

  public allWorkouts: Workout[] = [];

  public formattedDailyTime: string;
  public dailyReps: number;
  public dailyWeight: number;

  public formattedMonthlyTime: string;
  public monthlyReps: number;
  public monthlyWeight: number;

  public formattedYearlyTime: string;
  public yearlyReps: number;
  public yearlyWeight: number;
  
  constructor(private workoutStorageService: WorkoutStorageService, private timerService: TimerService) { }

  ngOnInit(): void {
    this.allWorkouts = this.workoutStorageService.getWorkouts();
    this.setWorkoutStats();
  }

  public setWorkoutStats(){
    this.setInfo();
  }

  private setInfo(){
    let todaysDate = new DateService();
    let tempDayTime=0;
    let tempDayReps=0;
    let tempDayWeight=0;

    let tempMonthTime=0;
    let tempMonthReps=0;
    let tempMonthWeight=0;

    let tempYearTime=0;
    let tempYearReps=0;
    let tempYearWeight=0;

    this.allWorkouts.forEach( workout => {
      let tempWorkout;
      let workoutSets;
      let cardio: boolean = false;
      
      if(workout.hasOwnProperty('totalWRepSets')){
        tempWorkout = workout as WeightLiftingWorkout;
        workoutSets = tempWorkout.totalWRepSets as IRepSetWl[];
      }
      else if(workout.hasOwnProperty('totalERepSets')){
        tempWorkout = workout as ExtremeWorkout;
        workoutSets = tempWorkout.totalERepSets as IRepSetE[];
      }
      else{
        cardio=true;
      }

      if(!cardio){
        if(todaysDate.checkSameYear(workout.workoutDate)){
          tempYearTime+=tempWorkout.totalWorkoutTime;


          if(todaysDate.checkSameMonth(tempWorkout.workoutDate)){
            tempMonthTime+=tempWorkout.totalWorkoutTime;

            if(todaysDate.checkSameDay(tempWorkout.workoutDate)){
              tempDayTime+=tempWorkout.totalWorkoutTime;
            }

          }

          workoutSets.forEach(set => {
            tempYearReps+=set.setReps;
            tempYearWeight+=set.setWeight;


            if(todaysDate.checkSameMonth(tempWorkout.workoutDate)){
              tempMonthReps+=set.setReps;
              tempMonthWeight+=set.setWeight;


              if(todaysDate.checkSameDay(tempWorkout.workoutDate)){
                tempDayReps+=set.setReps;
                tempDayWeight+=set.setWeight;
              }

            }
          });
        }
      }
    });

    this.setDayStats(tempDayTime, tempDayReps, tempDayWeight);

    this.setMonthStats(tempMonthTime, tempMonthReps, tempMonthWeight);

    this.setYearStats(tempYearTime, tempYearReps, tempYearWeight);
  }

  private setDayStats(time: number, reps: number, weight: number){
    this.formattedDailyTime = this.timerService.formatTime(time);
    this.dailyReps = reps;
    this.dailyWeight = weight;
  }

  private setMonthStats(time: number, reps: number, weight: number){
    this.formattedMonthlyTime = this.timerService.formatTime(time);
    this.monthlyReps = reps;
    this.monthlyWeight = weight;
  }

  private setYearStats(time: number, reps: number, weight: number){
    this.formattedYearlyTime = this.timerService.formatTime(time);
    this.yearlyReps = reps;
    this.yearlyWeight = weight;
  }
}