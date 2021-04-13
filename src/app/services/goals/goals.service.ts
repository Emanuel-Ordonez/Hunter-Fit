import { Injectable } from '@angular/core';
import { DateService } from '../date/date.service';
import { IGoal } from './goalTypes/IGoal';
import { DailyGoal } from './goalTypes/IGoal-daily';
import { MonthlyGoal } from './goalTypes/IGoal-monthly';
import { YearlyGoal } from './goalTypes/IGoal-yearly';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private allGoals: IGoal[] = [];

  constructor() { }

  saveDailyGoal(goal: string) {
    // construct goal object:
    const type: string = "Daily";
    let todaysDate = new DateService();
    const goalToSave : DailyGoal = { goalDType: type, goalDetails: goal, goalDate: todaysDate};
    // store goal object:
    this.allGoals.push(goalToSave);
  }

  saveMonthlyGoal(goal: string) {
    // construct goal object:
    const type: string = "Monthly";
    let todaysDate = new DateService();
    const goalToSave : MonthlyGoal = { goalMType: type, goalDetails: goal, goalDate: todaysDate};
    // store goal object:
    this.allGoals.push(goalToSave);
  }

  saveYearlyGoal(goal: string) {
    // construct goal object:
    const type: string = "Yearly";
    let todaysDate = new DateService();
    const goalToSave : YearlyGoal = { goalYType: type, goalDetails: goal, goalDate: todaysDate};
    // store goal object:
    this.allGoals.push(goalToSave);
  }

  getDailyGoals(){
    return this.allGoals.filter(goal => goal.hasOwnProperty('goalDType'));
  }

  getMonthlyGoals(){
    return this.allGoals.filter(goal => goal.hasOwnProperty('goalMType'));
  }

  getYearlyGoals(){
    return this.allGoals.filter(goal => goal.hasOwnProperty('goalYType'));
  }

  getAllGoals(){
    return this.allGoals;
  }
}
