import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { Color } from '@nativescript/core/color';
import { Observable } from '@nativescript/core/data/observable';
import { Accuracy } from '@nativescript/core/ui/enums';
import { Style } from '@nativescript/core/ui/styling/style';
import * as geolocation from '@nativescript/geolocation';
import { MapView, Marker, Polyline, Position } from 'nativescript-google-maps-sdk';
import { Pedometer } from 'nativescript-pedometer';
import { coordinatesConstants } from './coordinatesConstants';
import { IUSCoords } from './IUSCoords';

// var mapsModule = require("nativescript-google-maps-sdk");
// registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.tns.html',
  styleUrls: ['./tracking.component.tns.css']
})
export class TrackingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onPageLoaded(){
    console.log("onPageLoaded()");
    geolocation.enableLocationRequest();
    // geolocation.isEnabled().then(function (isEnabled) {
    //   if (!isEnabled) {
    //       geolocation.enableLocationRequest(true, true).then(() => {
    //           console.log("User Enabled Location Service");
    //       }, (e) => {
    //           console.log("Error: " + (e.message || e));
    //       }).catch(ex => {
    //           console.log("Unable to Enable Location", ex);
    //       });
    //   }
    // }, function (e) {
    //   console.log("Error: " + (e.message || e));
    // });
    // const pedometer = new Pedometer();

    // pedometer.isStepCountingAvailable().then(avail => {
    //   alert(avail ? "Yes" : "No");
    // });

    // pedometer.startUpdates({
    //   fromDate: new Date(), // iOS only. Optional, default: now
    //   onUpdate: result => {
    //     // see the table below
    //     console.log(`Pedometer update: ${JSON.stringify(result)}`);
    //   }
    // }).then(() => {
    //   console.log("Pedometer updates started.");
    // }, err => {
    //   console.log("Error: " + err);
    // });
  }
    
}
