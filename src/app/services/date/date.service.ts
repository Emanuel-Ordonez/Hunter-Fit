import { Injectable, ɵCodegenComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  public day: number;
  public month: number;
  public year: number;

  constructor() {
    this.day = new Date().getDate();
    this.month = new Date().getMonth() + 1;
    this.year = new Date().getFullYear();
  }

  public getFormattedDate(): string {
    return `${this.day}-${this.day}-${this.year}`;
  }

  public checkSameDay(checkDate: DateService): boolean{
    console.log("===========CheckSameDay==================");
    console.log(this);
    console.log(checkDate);
    console.log("=========================================");
    if ((this.day==checkDate.day)&&(this.month==checkDate.month)&&(this.year==checkDate.year))
      return true;
    else
      return false;
  }

  public checkSameMonth(checkDate: DateService): boolean{
    if ((this.month==checkDate.month)&&(this.year==checkDate.year))
      return true;
    else
      return false;
  }

  public checkSameYear(checkDate: DateService): boolean{
    if (this.year==checkDate.year)
      return true;
    else
      return false;
  }

  public setDate(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
  }
}