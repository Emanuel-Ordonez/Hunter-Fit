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

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
    this.username = getString("username");
  }

  public onPageLoad(){
    this.username = getString("username");
  }

  public onPageLoaded(){  
    this.username = getString("username");
  }

  public navigateToEditProfile(){
    this.routerExtensions.navigate(['/editProfile']);
  }

  public navigateToGoals(){
    this.routerExtensions.navigate(['/goal']);
  }

}
