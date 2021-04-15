import { Component, OnInit } from '@angular/core';
import { GoalsService } from '@src/app/services/goals/goals.service';

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
    return this.goalService.getDailyCompleteGoals();
  }

  public getAllCompletedMonthlyGoals(){
    return this.goalService.getMonthlyCompleteGoals();
  }

  public getAllCompletedYearlyGoals(){
    return this.goalService.getYearlyCompleteGoals();
  }
}
