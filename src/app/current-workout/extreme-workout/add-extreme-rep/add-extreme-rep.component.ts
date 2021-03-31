import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventData, GridLayout, ItemSpec, ListPicker, TextField, TextView } from '@nativescript/core';
import { getString, setString } from '@nativescript/core/application-settings';
import { IRepSet } from '@src/app/services/IRepSet-extreme';
import { WorkoutConstants } from '@src/app/services/WorkoutConstants';

@Component({
  selector: 'app-add-extreme-rep',
  templateUrl: './add-extreme-rep.component.html',
  styleUrls: ['./add-extreme-rep.component.css']
})
export class AddExtremeRepComponent implements OnInit {
  repSets: IRepSet[] = [];
  repSet: IRepSet;
  setNumberCounter = 1;
  setRepsInput;
  setWeightInput;
  setWorkoutType = "";
  @Output() emitAllRepSetsEvent = new EventEmitter<IRepSet[]>();
  public weight_lifting_workouts: Array<string> = WorkoutConstants.weight_lifting_workouts;

  constructor() { }

  ngOnInit(): void {
  }
  
  public onSelectedIndexChanged(args: EventData) {
    const picker = <ListPicker>args.object;
    this.setWorkoutType = this.weight_lifting_workouts[picker.selectedIndex];
    let typeId = Number(<ListPicker>args.object.get("id").replace("workoutType-textField-", ""));

    setString("workoutTypeId", this.setWorkoutType);
    // console.log(`index: ${picker.selectedIndex}; item ${this.weight_lifting_workouts[picker.selectedIndex]}`);
    this.repSets[typeId - 1].setWorkoutType = this.setWorkoutType;
    this.emitAllRepSets();
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
    const newRepSet: IRepSet = {
      setWorkoutType: getString("workoutTypeId"), 
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
