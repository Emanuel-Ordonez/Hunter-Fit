import { Component, OnInit} from '@angular/core';
import { ObservableArray, Utils } from '@nativescript/core';
import { TipsService } from '@src/app/services/tips/tips.service';

@Component({
  selector: 'app-home',
  moduleId: module.id,
  templateUrl: './home.component.tns.html',
  styleUrls: ['./home.component.tns.css']
})
export class HomeComponent implements OnInit {

  public cardioTips = this.tipsService.getCardioTips();

  public weightliftingTips = this.tipsService.getWeightliftingTips();

  public nutritionTips = this.tipsService.getNutritionTips();

  constructor(private tipsService: TipsService) { }

  ngOnInit(): void {
  }

  amadorLink(){
    Utils.openUrl("https://www.hunterindustries.com/headlines/hunter-employee-spotlight-amador-porras");
  }

  cardioLink(){
    Utils.openUrl("https://www.fitday.com/fitness-articles/fitness/10-tips-to-improve-your-cardio-workout.html");
  }

  weightliftingLink(){
    Utils.openUrl("https://www.bodybuilding.com/fun/mdlabs1.htm");
  }

  nutritionLink(){
    Utils.openUrl("https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/nutrition-rules-that-will-fuel-your-workout/art-20390073");
  }
}
