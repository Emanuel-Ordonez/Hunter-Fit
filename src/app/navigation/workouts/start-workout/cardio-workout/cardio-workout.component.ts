import { Component, OnInit } from '@angular/core';
import { EventData } from '@nativescript/core/data/observable';
import { TextView } from '@nativescript/core/ui/text-view';
import { WorkoutsComponent } from '../../workouts.component';
import { StartWorkoutComponent } from '../start-workout.component';


@Component({
  selector: 'app-cardio-workout',
  moduleId: module.id,
  templateUrl: './cardio-workout.component.tns.html',
  styleUrls: ['./cardio-workout.component.tns.css']
})
export class CardioWorkoutComponent extends StartWorkoutComponent implements OnInit {

  tvtext = "";

  ngOnInit(): void {
    // this.startWorkout();
  }

  onTextChange(args: EventData) {
    const tv = args.object as TextView;
    // console.log(tv.text);
}

}
