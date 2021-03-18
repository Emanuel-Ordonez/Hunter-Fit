import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GridLayout, ItemSpec, TextField, TextView } from '@nativescript/core';
import { setNumber } from '@nativescript/core/application-settings';
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
    const repSet = this.getRepSet();
    this.repSets.push(repSet);
    if(this.setNumberCounter!=0)
      this.newRepSetEvent.emit(repSet);//should be implemented with finish button somehow
    this.setNumberCounter++;
  }

  private getRepSet(){
    const newRepSet: IRepSet = {
      setNumber: this.setNumberCounter,
      setReps: this.setRepsInput,
      setWeight: this.setWeightInput
    };
    return newRepSet;
  }

  public deleteRow() {
    this.repSets.pop();
    this.setNumberCounter--;
  }
}