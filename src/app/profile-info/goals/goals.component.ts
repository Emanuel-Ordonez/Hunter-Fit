import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.tns.html',
  styleUrls: ['./goals.component.tns.css']
})
export class GoalsComponent implements OnInit {

  public allGoals: String[] = [];

  public dailyGoal: string;
  public monthlyGoal: string;
  public yearlyGoal: string;
  public goalDate: number;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
  }

  public goBack(){
    this.routerExtensions.back();
  }

  public goSetGoal(){
    this.routerExtensions.navigate(["/setGoal"]);
  }
}
