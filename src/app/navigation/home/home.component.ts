import { Component, OnInit} from '@angular/core';
import { ObservableArray } from '@nativescript/core';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.tns.html',
  styleUrls: ['./home.component.tns.css']
})
export class HomeComponent implements OnInit {

  private _pieSource: ObservableArray<any>;

  constructor() { }

  get pieSource(): ObservableArray<any> {
    return this._pieSource;
  } 

  ngOnInit(): void {
    this.pieInfo();
  }

  pieInfo(){
    this._pieSource = new ObservableArray(this.returnPieInfo());
  }

  returnPieInfo(): any[]{
    return[
        { Country: "Germany", Amount: 15, SecondVal: 14, ThirdVal: 24, Impact: 0, Year: 0 },
        { Country: "France", Amount: 13, SecondVal: 23, ThirdVal: 25, Impact: 0, Year: 0 },
        { Country: "Bulgaria", Amount: 24, SecondVal: 17, ThirdVal: 23, Impact: 0, Year: 0 },
        { Country: "Spain", Amount: 11, SecondVal: 19, ThirdVal: 24, Impact: 0, Year: 0 },
        { Country: "USA", Amount: 18, SecondVal: 8, ThirdVal: 21, Impact: 0, Year: 0 }
    ];
  }

}
