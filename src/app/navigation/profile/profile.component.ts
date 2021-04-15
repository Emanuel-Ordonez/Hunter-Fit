import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { getString } from '@nativescript/core/application-settings';

@Component({
  selector: 'app-profile',
  moduleId: module.id,
  templateUrl: './profile.component.tns.html',
  styleUrls: ['./profile.component.tns.css']
})
export class ProfileComponent implements OnInit {
  public username: String; 
  public personalMotto: String;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
  }

  public onPageLoaded(){  
    this.username = getString("username");
    this.personalMotto = getString("personalMotto");
  }

  public goToEditProfile(){
    this.routerExtensions.navigate(['/editProfile']);
  }

  public goToGoals(){
    this.routerExtensions.navigate(['/goals']);
  }

}
