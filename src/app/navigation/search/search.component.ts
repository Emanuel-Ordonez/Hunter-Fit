import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { setString } from '@nativescript/core/application-settings';
import { WorkoutConstants } from '@src/app/services/WorkoutConstants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.tns.html',
  styleUrls: ['./search.component.tns.css']
})
export class SearchComponent implements OnInit {
  workoutList: Array<string>;

  constructor(private routerExtensions: RouterExtensions) { 
    this.workoutList = WorkoutConstants.buttons;
  }

  ngOnInit(): void {
  }

  public getWorkouts(){
  }

  public startWorkout(workout: string){
    setString("workoutTypeId", workout);
    this.routerExtensions.navigate(['/weightLiftingWorkout']);
  }
}
