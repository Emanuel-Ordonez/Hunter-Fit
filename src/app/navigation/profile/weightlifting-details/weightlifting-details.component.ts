import { Component, OnInit } from '@angular/core';
import { DateService } from '@src/app/services/date/date.service';
import { IRepSet } from '@src/app/services/IRepSet';
import { TimerService } from '@src/app/services/timer.service';
import { Workout } from '@src/app/services/workout';
import { WorkoutStorageService } from '@src/app/services/workout-storage.service';

@Component({
  selector: 'app-weightlifting-details',
  templateUrl: './weightlifting-details.component.tns.html',
  styleUrls: ['./weightlifting-details.component.tns.css']
})
export class WeightliftingDetailsComponent implements OnInit {

  public allWorkouts: Workout[] = [];
  public formattedAllTime: string;
  public allReps: number;
  public allWeight: number;

  public formattedDailyTime: string = "";
  public dailyReps: number = 0;
  public dailyWeight: number = 0;

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

    this.allWorkouts.forEach(workout => {
        if(todaysDate.checkSameDay(workout.workoutDate)){
          tempDayTime+=workout.totalWorkoutTime;
          
          let workoutSets: IRepSet[] = workout.totalRepSets;
            workoutSets.forEach(set => {
            tempDayReps+=set.setReps;
            tempDayWeight+=set.setWeight;
          });
        }

        if(todaysDate.checkSameMonth(workout.workoutDate)){
          tempMonthTime+=workout.totalWorkoutTime;
          
          let workoutSets: IRepSet[] = workout.totalRepSets;
            workoutSets.forEach(set => {
            tempMonthReps+=set.setReps;
            tempMonthWeight+=set.setWeight;
          });
        }

        if(todaysDate.checkSameYear(workout.workoutDate)){
          tempYearTime+=workout.totalWorkoutTime;
          
          let workoutSets: IRepSet[] = workout.totalRepSets;
            workoutSets.forEach(set => {
            tempYearReps+=set.setReps;
            tempYearWeight+=set.setWeight;
          });
        }
    });
    this.formattedDailyTime = this.timerService.formatTime(tempDayTime);
    this.dailyReps = tempDayReps;
    this.dailyWeight = tempDayWeight;

    this.formattedMonthlyTime = this.timerService.formatTime(tempMonthTime);
    this.monthlyReps = tempMonthReps;
    this.monthlyWeight = tempMonthWeight;

    this.formattedYearlyTime = this.timerService.formatTime(tempYearTime);
    this.yearlyReps = tempYearReps;
    this.yearlyWeight = tempYearWeight;
  }
}
