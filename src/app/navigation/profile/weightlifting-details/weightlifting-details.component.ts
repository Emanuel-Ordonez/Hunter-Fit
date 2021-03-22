import { Component, OnInit } from '@angular/core';
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
  
  constructor(private workoutStorageService: WorkoutStorageService, private timerService: TimerService) { }

  ngOnInit(): void {
    this.getWorkoutStats();
  }

  public getWorkoutStats(){
    this.allWorkouts = this.workoutStorageService.getWorkouts();

    this.allWorkouts.forEach(workout => { 
      console.log("workoutType = ", workout.workoutType);
      console.log("totalWorkoutTime = ", this.timerService.formatTime(workout.totalWorkoutTime));
      console.log("workoutDate = ", workout.workoutDate);
      console.log("totalRepSet = ", workout.totalRepSets);
      console.log("workoutsNotes = ", workout.workoutNotes);

    });
  }
}
