import { Component, OnInit } from '@angular/core';
import { WorkoutsComponent } from '../../workouts.component';
import { StartWorkoutComponent } from '../start-workout.component';

@Component({
  selector: 'app-cardio-workout',
  moduleId: module.id,
  templateUrl: './cardio-workout.component.tns.html',
  styleUrls: ['./cardio-workout.component.tns.css']
})
export class CardioWorkoutComponent extends StartWorkoutComponent implements OnInit {

  ngOnInit(): void {
    this.startWorkout();
  }

}
