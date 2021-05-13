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
  private allCompletedGoals: IGoal[] = [];

  constructor() { }

  public saveDailyGoal(goal: string) {
    // construct goal object:
    let todaysDate = new DateService();
    // store goal object:
    this.pushDailyGoal(goal, todaysDate);
  }

  public setDailyGoal(goal: string, date: DateService){
    this.pushDailyGoal(goal, date);
  }

  private pushDailyGoal(goal: string, setDate: DateService){
    const type: string = "Daily";
    const goalToSave : DailyGoal = { goalDType: type, goalDetails: goal, goalSetDate: setDate, goalMetDate: null };
    this.allGoals.push(goalToSave);
  }

  public saveMonthlyGoal(goal: string) {
    // construct goal object:
    let todaysDate = new DateService();
    // store goal object:
    this.pushMonthlyGoal(goal, todaysDate);
  }

  public setMonthlyGoal(goal: string, date: DateService){
    this.pushMonthlyGoal(goal, date);
  }

  private pushMonthlyGoal(goal: string, setDate: DateService){
    const type: string = "Monthly";
    const goalToSave : MonthlyGoal = { goalMType: type, goalDetails: goal, goalSetDate: setDate, goalMetDate: null };
    this.allGoals.push(goalToSave);
  }

  public saveYearlyGoal(goal: string) {
    // construct goal object:
    let todaysDate = new DateService();
    // store goal object:
    this.pushYearlyGoal(goal, todaysDate);
  }

  public setYealyGoal(goal: string, date: DateService){
    this.pushYearlyGoal(goal, date);
  }

  private pushYearlyGoal(goal: string, setDate: DateService){
    const type: string = "Yearly";
    const goalToSave : YearlyGoal = { goalYType: type, goalDetails: goal, goalSetDate: setDate, goalMetDate: null };
    this.allGoals.push(goalToSave);
  }



  public getAllGoals(){
    return this.allGoals;
  }

  public getDailyGoals(){
    return this.allGoals.filter(goal => goal.hasOwnProperty('goalDType'));
  }

  public getMonthlyGoals(){
    return this.allGoals.filter(goal => goal.hasOwnProperty('goalMType'));
  }

  public getYearlyGoals(){
    return this.allGoals.filter(goal => goal.hasOwnProperty('goalYType'));
  }




  public completeGoal(completeGoal: IGoal){
    this.allGoals = this.allGoals.filter( goal => goal !== completeGoal);
    completeGoal.goalMetDate = new DateService();
    this.saveCompletedGoal(completeGoal);
  }

  public setDataCompletedGoal(completeGoal: IGoal){
    this.saveCompletedGoal(completeGoal);
  }

  private saveCompletedGoal(completeGoal: IGoal){
    this.allCompletedGoals.push(completeGoal);
  }



  public getAllCompletedGoals(){
    return this.allCompletedGoals;
  }

  public getDailyCompleteGoals(){
    return this.allCompletedGoals.filter(goal => goal.hasOwnProperty('goalDType'));
  }

  public getMonthlyCompleteGoals(){
    return this.allCompletedGoals.filter(goal => goal.hasOwnProperty('goalMType'));
  }

  public getYearlyCompleteGoals(){
    return this.allCompletedGoals.filter(goal => goal.hasOwnProperty('goalYType'));
  }
}
