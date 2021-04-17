import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventData, GridLayout, ItemSpec, ListPicker, TextField, TextView } from '@nativescript/core';
import { getString, setString } from '@nativescript/core/application-settings';
import { IRepSetWl } from '@src/app/services/workout/workout-templates/set-interface/IRepSet-weightlifting';
import { WorkoutConstants } from '@src/app/services/workout/WorkoutConstants';

@Component({
  selector: 'app-add-rep',
  templateUrl: './add-rep.component.html',
  styleUrls: ['./add-rep.component.css']
})
export class AddRepComponent implements OnInit {
  
  repSets: IRepSetWl[] = [];
  repSet: IRepSetWl;
  setNumberCounter = 1;
  setRepsInput;
  setWeightInput;
  setWorkoutType = "";
  @Output() emitAllRepSetsEvent = new EventEmitter<IRepSetWl[]>();

  constructor() { }

  ngOnInit(): void {
  }

  public repsInput(args) {
    const repTextView = args.object as TextView;
    this.setRepsInput = repTextView.text;
    let repId = Number(args.object.id.replace("reps-textField-", ""));

    // console.log("this.setRepsInput = ", this.setRepsInput);
    // console.log("repId = ", repId);
    this.repSets[repId - 1].setReps = Number(this.setRepsInput);
    this.emitAllRepSets();
  }

  public weightInput(args) {
    const weightTextView = args.object as TextView;
    this.setWeightInput= weightTextView.text;
    let weightId = Number(args.object.id.replace("weight-textField-", ""));

    // console.log("this.setWeightInput = ", this.setWeightInput);
    // console.log("weightId = ", weightId);
    this.repSets[weightId - 1].setWeight = Number(this.setWeightInput);
    this.emitAllRepSets();
  }

  public emitAllRepSets() {
    if (this.setNumberCounter != 0)
      this.emitAllRepSetsEvent.emit(this.repSets);
  }

  public addRepSetToRepSetsArray() {
    this.repSet = this.getRepSet();
    this.repSets.push(this.repSet);
    this.setNumberCounter++;
  }

  private getRepSet() {
    const newRepSet: IRepSetWl = {
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