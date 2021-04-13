import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { GoalsService } from '@src/app/services/goals/goals.service';
import { IGoal } from '@src/app/services/goals/goalTypes/IGoal';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.tns.html',
  styleUrls: ['./goals.component.tns.css']
})
export class GoalsComponent implements OnInit {

  public allDailyGoals: IGoal[] = [];
  public allMonthlyGoals: IGoal[] = [];
  public allYearlyGoals: IGoal[] = [];

  constructor(private routerExtensions: RouterExtensions, private goalService: GoalsService) { }

  ngOnInit(): void {
  }

  public setValues(){
    this.allDailyGoals = this.goalService.getDailyGoals();
    this.allMonthlyGoals = this.goalService.getMonthlyGoals();
    this.allYearlyGoals = this.goalService.getYearlyGoals();
  }

  public goBack(){
    this.routerExtensions.back();
  }

  public goSetGoal(){
    this.routerExtensions.navigate(["/setGoal"]);
  }
}
