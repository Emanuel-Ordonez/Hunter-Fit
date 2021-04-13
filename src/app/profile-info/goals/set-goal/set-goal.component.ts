import { Component, OnInit } from '@angular/core';
import { RouterExtensions, TextView } from '@nativescript/angular';
import { EventData } from '@nativescript/core';
import { GoalsService } from '@src/app/services/goals/goals.service';

@Component({
  selector: 'app-set-goal',
  templateUrl: './set-goal.component.tns.html',
  styleUrls: ['./set-goal.component.tns.css']
})
export class SetGoalComponent implements OnInit {
  private goalType: any;
  private prevGoalType: any;
  private tvText: string;

  constructor(private routerExtensions: RouterExtensions, private goalService: GoalsService) { }

  ngOnInit(): void {
  }

  public selectGoalType(goalTypeButton: any) {
    this.goalType = goalTypeButton.object.text as string;

    goalTypeButton.object.backgroundColor = "#787774";

    if (this.prevGoalType) {
      this.prevGoalType.object.backgroundColor = "#00658A";
    }
    this.prevGoalType = goalTypeButton;
  }

  public onTextChange(arg: EventData){
    const temp = arg.object as TextView;
    this.tvText = temp.text;
  }
  
  public cancelSetGoal(){
    this.routerExtensions.back();
  }

  public setGoal(){
    if(this.goalType == "Daily"){
      this.goalService.saveDailyGoal(this.tvText);
      this.routerExtensions.back();
    }
    else if(this.goalType == "Monthly"){
      this.goalService.saveMonthlyGoal(this.tvText);
      this.routerExtensions.back();
    }
    else if(this.goalType == "Yearly"){
      this.goalService.saveYearlyGoal(this.tvText);
      this.routerExtensions.back();
    }
    else{
      alert("Must selected goal type!");
    }
  }
}
