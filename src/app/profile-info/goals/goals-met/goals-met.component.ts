import { Component, OnInit } from '@angular/core';
import { GoalsService } from '@src/app/services/goals/goals.service';
import { IGoal } from '@src/app/services/goals/goalTypes/IGoal';

@Component({
  selector: 'app-goals-met',
  templateUrl: './goals-met.component.html',
  styleUrls: ['./goals-met.component.css']
})
export class GoalsMetComponent implements OnInit {

  constructor(private goalService: GoalsService) { }

  ngOnInit(): void {
  }

  public getAllCompletedDailyGoals(){
    return this.reverseArray(this.goalService.getDailyCompleteGoals());
  }

  public getAllCompletedMonthlyGoals(){
    return this.reverseArray(this.goalService.getMonthlyCompleteGoals());
  }

  public getAllCompletedYearlyGoals(){
    return this.reverseArray(this.goalService.getYearlyCompleteGoals());
  }

  private reverseArray(array: IGoal[]){
    return array.slice().reverse();
  }
}
