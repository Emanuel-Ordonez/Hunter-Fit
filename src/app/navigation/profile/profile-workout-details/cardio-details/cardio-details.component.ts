import { Component, OnInit } from '@angular/core';
import { CardioWorkout } from '@src/app/services/cardio-workout';
import { DateService } from '@src/app/services/date/date.service';
import { TimerService } from '@src/app/services/timer.service';
import { Workout } from '@src/app/services/workout';
import { WorkoutStorageService } from '@src/app/services/workout-storage.service';

@Component({
  selector: 'app-cardio-details',
  templateUrl: './cardio-details.component.tns.html',
  styleUrls: ['./cardio-details.component.tns.css']
})
export class CardioDetailsComponent implements OnInit {

  public allWorkouts: Workout[] = [];

  public formattedDailyTime: string;
  public dailyDistance: number;

  public formattedMonthlyTime: string;
  public monthlyDistance: number;

  public formattedYearlyTime: string;
  public yearlyDistance: number;
  
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
    let tempDayDistance=0;

    let tempMonthTime=0;
    let tempMonthDistance=0;

    let tempYearTime=0;
    let tempYearDistance=0;

    //Parses through for Weightlifting workouts and add info
    this.allWorkouts.forEach(workout => {
      //Adds Weightlifting workout into profile weightlifting
      if(workout.hasOwnProperty('distanceTraveled')){
        let tempWorkout = workout as CardioWorkout;

        if(todaysDate.checkSameYear(workout.workoutDate)){
          tempYearTime+=workout.totalWorkoutTime;
          tempYearDistance+=tempWorkout.distanceTraveled;

          if(todaysDate.checkSameMonth(tempWorkout.workoutDate)){
            tempMonthTime+=workout.totalWorkoutTime;
            tempMonthDistance+=tempWorkout.distanceTraveled;

            if(todaysDate.checkSameDay(tempWorkout.workoutDate)){
              tempDayTime+=tempWorkout.totalWorkoutTime;
              tempDayDistance+=tempWorkout.distanceTraveled;
            }
          }
        }

      }

    });

    this.setDayStats(tempDayTime, tempDayDistance);

    this.setMonthStats(tempMonthTime, tempMonthDistance);

    this.setYearStats(tempYearTime, tempYearDistance);
  }

  private setDayStats(time: number, distance: number){
    this.formattedDailyTime = this.timerService.formatTime(time);
    this.dailyDistance = distance;
  }

  private setMonthStats(time: number, distance: number){
    this.formattedMonthlyTime = this.timerService.formatTime(time);
    this.monthlyDistance = distance;
  }

  private setYearStats(time: number, distance: number){
    this.formattedYearlyTime = this.timerService.formatTime(time);
    this.yearlyDistance = distance;
  }
}
