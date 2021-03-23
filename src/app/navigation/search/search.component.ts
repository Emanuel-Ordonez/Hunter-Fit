import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { setString } from '@nativescript/core/application-settings';
import { WorkoutConstants } from '@src/app/services/WorkoutConstants';
import { EventData } from '@nativescript/core/data/observable';
import { SearchBar } from '@nativescript/core/ui/search-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.tns.html',
  styleUrls: ['./search.component.tns.css']
})
export class SearchComponent implements OnInit {
  workoutList: Array<string>;
  searchList: Array<string>;

  constructor(private routerExtensions: RouterExtensions) { 
    this.workoutList = WorkoutConstants.buttons;
    this.searchList = WorkoutConstants.buttons;
  }

  ngOnInit(): void {
  }

  public getWorkouts(){
  }

  public startWorkout(workout: string){
    setString("workoutTypeId", workout);
    this.routerExtensions.navigate(['/weightLiftingWorkout']);
  }

  public onTextChange(args: EventData){
    const searchBar = args.object as SearchBar;
    this.searchWorkout(searchBar.text);
  }

  private searchWorkout(phase: string){
    phase = phase.toLowerCase();
    this.searchList = this.workoutList.filter(item => item.toLowerCase().match(phase));
  }

  public onClear(){
    this.searchList=this.workoutList;
  }
}
