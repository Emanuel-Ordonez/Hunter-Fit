import { Component, OnInit } from '@angular/core';
import { GridLayout, ItemSpec} from '@nativescript/core';

@Component({
  selector: 'app-add-rep',
  templateUrl: './add-rep.component.html',
  styleUrls: ['./add-rep.component.css']
})
export class AddRepComponent implements OnInit {
  repSets: RepSet[] = [];
  setNumberCounter = 1;

  constructor() { }

  ngOnInit(): void {
  }

  public addRep(){
    const rep = new RepSet();
    rep.setNumber = this.setNumberCounter++;
    rep.setReps = 10;
    rep.setWeight = 110;
    this.repSets.push(rep);
  }

  public deleteRep(){
    alert("delete");
  }

}

class RepSet{
  setNumber: number;
  setReps: number;
  setWeight: number;
}
