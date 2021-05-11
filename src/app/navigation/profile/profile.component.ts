import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { getString } from '@nativescript/core/application-settings';
import { WorkoutStorageService } from '@src/app/services/workout/workout-storage.service';

@Component({
  selector: 'app-dashboard',
  moduleId: module.id,
  templateUrl: './profile.component.tns.html',
  styleUrls: ['./profile.component.tns.css']
})
export class ProfileComponent implements OnInit {
  public username: String; 
  public personalMotto: String;
  public cardioCount: number;
  public weightliftingCount: number;
  public extremeCount: number;

  constructor(private routerExtensions: RouterExtensions, private workoutStorageService: WorkoutStorageService) { }

  ngOnInit(): void {
  }

  public onPageLoaded(){  
    this.username = getString("username");
    this.personalMotto = getString("personalMotto");
    this.setWorkoutsCompleted();
  }

  private setWorkoutsCompleted(){
    this.cardioCount = this.workoutStorageService.getCardioCount();
    this.weightliftingCount = this.workoutStorageService.getWeightliftingCount();
    this.extremeCount = this.workoutStorageService.getExtremeCount();
  }

  public goToEditProfile(){
    this.routerExtensions.navigate(['/editProfile']);
  }

  public goToGoals(){
    this.routerExtensions.navigate(['/goals']);
  }

}
