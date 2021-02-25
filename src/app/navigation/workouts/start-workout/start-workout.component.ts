import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { getNumber, setNumber } from '@nativescript/core/application-settings';
import { EventData, Observable } from '@nativescript/core/data/observable';
import { ListPicker } from '@nativescript/core/ui/list-picker';
import { WorkoutsComponent } from '../workouts.component';

@Component({
  selector: 'app-start-workout',
  moduleId: module.id,
  templateUrl: './start-workout.component.tns.html',
  styleUrls: ['./start-workout.component.tns.css']
})
export class StartWorkoutComponent extends WorkoutsComponent {

}
