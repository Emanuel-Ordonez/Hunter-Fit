import { Component, OnInit } from '@angular/core';
import { GridLayout, ItemSpec} from '@nativescript/core';

@Component({
  selector: 'app-add-rep',
  templateUrl: './add-rep.component.html',
  styleUrls: ['./add-rep.component.css']
})
export class AddRepComponent implements OnInit {
  repGrid: GridLayout = new GridLayout();

  constructor() { }

  ngOnInit(): void {
  }

  public addRow(){
    alert(this.repGrid);
    this.repGrid.addRow(new ItemSpec(1, "auto"));
    this.repGrid.removeRows();
    alert("bye");
  }

  public deleteRow(){
    alert("delete");
  }

}
