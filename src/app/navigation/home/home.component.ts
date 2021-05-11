import { Component, OnInit} from '@angular/core';
import { ObservableArray } from '@nativescript/core';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.tns.html',
  styleUrls: ['./home.component.tns.css']
})
export class HomeComponent implements OnInit {

  public pieSource: { Brand: string, Amount: number }[] = [
    { Brand: "Audi", Amount: 10 },
    { Brand: "Mercedes", Amount: 76 },
    { Brand: "Fiat", Amount: 60 },
    { Brand: "BMW", Amount: 24 },
    { Brand: "Crysler", Amount: 40 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  pieInfo(){
  }

  // private _pieSource: ObservableArray<Car>;

  //   constructor() { }

  //   get pieSource(): ObservableArray<Car> {
  //       return this._pieSource;
  //   }

  //   ngOnInit() {
  //       this._pieSource = new ObservableArray(this.getPieSource());
  //   }

}
