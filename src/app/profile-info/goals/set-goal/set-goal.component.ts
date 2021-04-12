import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-set-goal',
  templateUrl: './set-goal.component.tns.html',
  styleUrls: ['./set-goal.component.tns.css']
})
export class SetGoalComponent implements OnInit {
  public goalType: any;
  public prevGoalType: any;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
  }

  public selectGoalType(goalTypeButton: any) {
    this.goalType = goalTypeButton.object.text;

    goalTypeButton.object.backgroundColor = "#787774";

    if (this.prevGoalType) {
      this.prevGoalType.object.backgroundColor = "#00658A";
    }
    this.prevGoalType = goalTypeButton;
  }

  public onTextChange(arg){
  }
  
  public cancelSetGoal(){
    this.routerExtensions.back();
  }
}
