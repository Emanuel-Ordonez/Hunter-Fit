import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.tns.html',
  styleUrls: ['./home.component.tns.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    var dialogs = require("tns-core-modules/ui/dialogs");
    // inputType property can be dialogs.inputType.password, dialogs.inputType.text, or dialogs.inputType.email.
    dialogs.prompt({
      title: "Workout",
      message: "Please fill in info",
      cancelButtonText: "Cancel",
      okButtonText: "Start Workout",
      defaultText: "Default text",
      inputType: dialogs.inputType.password
    }).then(function (r) {
      console.log("Dialog result: " + r.result + ", text: " + r.text);
    });
  }

}
