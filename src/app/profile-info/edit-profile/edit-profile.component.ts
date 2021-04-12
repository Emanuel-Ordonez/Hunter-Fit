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
  private username: string;
  private personalMotto: string;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
  }

  public onUsernameChange(args: EventData){
    const usernameView = args.object as TextView;
    this.username = usernameView.text;
  }

  public onPersonalMottoChange(args: EventData){
    const personalMottoView = args.object as TextView;
    this.personalMotto = personalMottoView.text;
  }

  public saveChanges(args: EventData){
    //In future, run some functionality to make sure username is not already taken
    if(this.username){
      setString("username", this.username);
    }
    if(this.personalMotto){
      setString("personalMotto", this.personalMotto);
    }
    this.routerExtensions.back();
  }

}
