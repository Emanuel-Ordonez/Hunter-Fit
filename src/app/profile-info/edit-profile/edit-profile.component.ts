import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { EventData, TextView } from '@nativescript/core';
import { setString } from '@nativescript/core/application-settings';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.tns.html',
  styleUrls: ['./edit-profile.component.tns.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
  }

  public onUsernameChange(args: EventData){
    const usernameView = args.object as TextView;
    console.log("Username: " + usernameView.text);
    setString("username", usernameView.text);
  }

  public saveChanges(args: EventData){
    //In future, run some functionality to make sure username is not already taken
    const tv = args.object as TextView;
    // this.workoutNotes = tv.text;
    this.routerExtensions.back();
  }

}
