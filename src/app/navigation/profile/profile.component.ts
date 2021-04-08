import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-profile',
  moduleId: module.id,
  templateUrl: './profile.component.tns.html',
  styleUrls: ['./profile.component.tns.css']
})
export class ProfileComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
  }

  public navigateToGoals(){
    this.routerExtensions.navigate(['/goal']);
  }

}
