import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Dialogs } from '@nativescript/core';
import { GoalsService } from '@src/app/services/goals/goals.service';
import { IGoal } from '@src/app/services/goals/goalTypes/IGoal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.tns.html',
  styleUrls: ['./goals.component.tns.css']
})
export class GoalsComponent implements OnInit {

  /*public allDailyGoals: IGoal[] = [];
  public allMonthlyGoals: IGoal[] = [];
  public allYearlyGoals: IGoal[] = [];*/

  constructor(private routerExtensions: RouterExtensions, private goalService: GoalsService) { }

  ngOnInit(): void {
  }

  public getAllDailyGoals(){
    return this.goalService.getDailyGoals();
  }

  public getAllMonthlyGoals(){
    return this.goalService.getMonthlyGoals();
  }

  public getAllYearlyGoals(){
    return this.goalService.getYearlyGoals();
  }

  public goToGoalsMet(){
    this.routerExtensions.navigate(["/goalsMet"]);
  }

  public goSetGoal(){
    this.routerExtensions.navigate(["/setGoal"]);
  }

  public goalMet(goal: IGoal){

    let options = {
      title: "Did you meet this goal?",
      message: goal.goalDetails,
      okButtonText: "Yes",
      cancelButtonText: "Cancel"
    };
  
    Dialogs.confirm(options).then((result: boolean) => {
        console.log(result);
        if(result){
          this.goalService.completeGoal(goal);
        }
    });
  }
}
