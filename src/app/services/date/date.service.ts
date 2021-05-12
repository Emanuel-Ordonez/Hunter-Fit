import { Injectable, ɵCodegenComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private day: number;
  private month: number;
  private year: number;

  constructor() {
    this.initialize();
  }

  private initialize(){
    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.setDate(day, month, year);
  }

  public setDate(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
  }

  public getFormattedDate(): string {
    return `${this.month}-${this.day}-${this.year}`;
  }

  public checkSameDay(checkDate: DateService): boolean{
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
}