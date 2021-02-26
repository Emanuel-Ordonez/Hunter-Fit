import { Component, OnInit } from '@angular/core';
import { WorkoutsComponent } from '../../workouts.component';

@Component({
  selector: 'app-cardio-workout',
  moduleId: module.id,
  templateUrl: './cardio-workout.component.tns.html',
  styleUrls: ['./cardio-workout.component.tns.css']
})
export class CardioWorkoutComponent extends WorkoutsComponent implements OnInit {

  ngOnInit(): void {
  }

}
