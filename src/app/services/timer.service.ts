import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  public formatTime(value: number): string {
    const hours: number = Math.floor(value/3600);
    value-=(hours*3600);
    const minutes: number = Math.floor(value/60);
    value-=(minutes*60);
    return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(value).padStart(2, '0');
  }
}
