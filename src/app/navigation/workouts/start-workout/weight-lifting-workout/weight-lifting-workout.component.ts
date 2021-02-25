import { Component, OnInit } from '@angular/core';
import { WorkoutsComponent } from '../../workouts.component';

@Component({
  selector: 'app-weight-lifting-workout',
  moduleId: module.id,
  templateUrl: './weight-lifting-workout.component.tns.html',
  styleUrls: ['./weight-lifting-workout.component.tns.css']
})
export class WeightLiftingWorkoutComponent extends WorkoutsComponent implements OnInit {

  ngOnInit(): void {
  }

}
