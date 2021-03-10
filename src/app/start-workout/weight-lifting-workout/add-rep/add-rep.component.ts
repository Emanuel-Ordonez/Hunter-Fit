import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GridLayout, ItemSpec, TextField, TextView } from '@nativescript/core';
import { IRepSet } from '@src/app/services/IRepSet';

@Component({
  selector: 'app-add-rep',
  templateUrl: './add-rep.component.html',
  styleUrls: ['./add-rep.component.css']
})
export class AddRepComponent implements OnInit {
  repSets: IRepSet[] = [];
  setNumberCounter = 1;
  setRepsInput;
  setWeightInput;
  @Output() newRepSetEvent = new EventEmitter<IRepSet>();

  constructor() { }

  ngOnInit(): void {
  }

  public repsInput(args) {
    const tvrep = args.object as TextView;
    this.setRepsInput = tvrep.text;
  }

  public weightInput(args) {
    const tvwt = args.object as TextView;
    this.setWeightInput = tvwt.text;
  }
  
  public addRep() {
    const repSet: IRepSet = {
      setNumber: this.setNumberCounter,
      setReps: this.setRepsInput,
      setWeight: this.setWeightInput
    };
    console.log(this.setNumberCounter);
    this.setNumberCounter++;
    this.repSets.push(repSet);
    this.newRepSetEvent.emit(repSet);
  }

  public deleteRow() {
    this.repSets.pop();
    this.setNumberCounter--;
  }
}