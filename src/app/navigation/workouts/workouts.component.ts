import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NSRouterLink, RouterExtensions } from '@nativescript/angular';
import { getNumber, getString, setNumber } from '@nativescript/core/application-settings';
import { EventData, Observable } from '@nativescript/core/data/observable';
import { ListPicker } from '@nativescript/core/ui/list-picker';
import { WorkoutConstants } from '../../services/WorkoutConstants';

@Component({
  selector: 'app-workouts',
  moduleId: module.id,
  templateUrl: './workouts.component.tns.html',
  styleUrls: ['./workouts.component.tns.css']
})
export class WorkoutsComponent  {


}

