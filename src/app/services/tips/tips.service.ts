import { Injectable } from '@angular/core';
import { Tip } from './tip-templates/tip';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  private list_cardio_tips: Tip[] = [
    {title: "Increase the Incline", tipDesc: "Instead of running on a flat road or treadmill, head for the hills or bump up the incline. Running uphill will send the heart rate through the roof and increase the calorie burn. Some added benefits include improved leg strength, running form and spring speed."},
    {title: "Stop and Go", tipDesc: "Use interval training to increase workout intensity and maximize results. Alternate periods of all-out effort with periods of low effort or rest. Try sprinting 100 meters and then walking or jogging back to the start line before repeating the sprint. Eight to 10 sprints is all it will take to get a great workout."},
    {title: "Turn it Up!", tipDesc: "The music that is. Listening to music during a workout improves performance by increasing motivation and reducing fatigue. Pick something up-beat and fast-paced to keep energy levels high throughout the workout."},
    {title: "The Buddy System", tipDesc: "Workout with a training partner or group of friends to make the entire gym experience more enjoyable. Being accountable to another person will also serve as motivation and prevent missed workouts."},
    {title: "Be Consistent", tipDesc: "The best way to get results from a cardio workout is to create a routine and stick to it. Whether it's first thing in the morning, at lunch or after work, the body will adapt to training any time during the day. Be consistent and exercise on a consistent basis and your fitness goals are within reach."}
  ];

  private list_weightlifting_tips: Tip[] = [
    {title: "Keep a Journal", tipDesc: "By keeping an accurate journal you will guarantee that you are making progress, and if you are not then the journal itself will have the answers to why you are not making progress. The journal is the facts of your training and it cannot lie to you unless you write down the information incorrectly! It is pretty simple... if last week you did 100 lbs for 8 reps then this week you either need to do 9 reps or up the weight by 1-5 pounds. I know it sounds too simple, but if you do this long enough you will attain whatever goals you set for yourself."},
    {title: "Rest Between Sets", tipDesc: "The amount of time that you rest between sets is dependent upon the intensity at which you lift (how close to your maximum). If you are doing higher reps (12-15) then you rest periods will be shorter (45-75 seconds), but if you are doing only a few reps (1-5) then you will need longer periods (2-5 minutes) between each set. I know it sounds backward, but it has to do with energy. The more reps you do the lighter the weight and the faster your body will bounce back for the next set. The heavier the weight lifted the longer it takes to recover the energy for another bout of the same movement. This again should be in the plan."},
    {title: "Prevent Imbalances", tipDesc: "Have you ever seen a guy that trains nothing but bench? His shoulders are pulled forward and rounded in. He will have trouble sooner or later because he has an imbalance between his horizontal pushing and pulling muscles. When designing a program make sure that the program trains both the agonist and antagonist muscle groups. A few examples would be bench press and rowing, shoulder press with pull downs, curls with triceps extensions. By giving the proper amount of work to all the muscles you will be able to prevent imbalances and the potential for self induced injuries from improper training!"},
    {title: "Grip Work and Finishers", tipDesc: "Most people think why grip and what the heck are finishers? I focus all my clients on real world strength or functional strength. By training the grip you will have more wrist control (less injuries) and also you will be able to focus more and that will allow you to recruit more muscle fibers thus making you stronger. Finishers are stuff that is functional. After a hard leg session go out and push your car around the block. I have my clients do plate clean and press, carry sand bags either in front of them or on there shoulder, or do the dreaded Drill Instructor special (this consists of 5-10 minutes of push-ups, sit-ups, jumping jacks, deep knee bends, and running in place). These will be functional muscle and not just the pretty to look at kind."},
    {title: "Take Time Off", tipDesc: "Like I said before I set up programs that last 12 weeks and at the end of the 12-weeks (if not sooner) I put in a full week of rest. I know what you are thinking, but I will lose too much in a weeks time? No you will not and if you are like 99% of the rest of the population you will probably get stronger. Recover takes a lot of energy and since most of us have real stress in our lives like jobs, family, etc. We give up a ton of energy to other things than training. This week will refresh you mentally as well as physically and set you up for great gains in the next 12-week cycle of training."}
  ];
  private list_nutrition_tips: Tip[] = [
    {title: "Pay Attention", tipDesc: "You might be surprised how many active adults overlook the importance of nutrition basics — and then run short on key nutrients. Not getting enough vitamins, minerals and other nutrients can compromise your health and your performance. Yet fueling up for activity is as easy as following the well-established rules of a healthy diet: Eat plenty of fruits and vegetables, consume lean proteins, eat healthy fats, get your whole-grain carbohydrates, and drink plenty of fluids, especially water."},
    {title: "Fuel Up (even if your goal is to lose weight)", tipDesc: "Give your body the energy it needs to do the job you want — even if you are trying to lose weight. Skimping on nutrition can reduce muscle mass, lower bone density and cause fatigue. This puts you at risk of injury and illness, increases recovery time, causes hormonal problems, and, for women, menstrual issues. Make sure your diet plan supplies enough nutrient-dense calories so you can exercise and stay injury-free and healthy."},
    {title: "Rebuild with Protein", tipDesc: "Protein is important because it provides the amino acids your body needs to build and repair muscle. Most research suggests very active people should eat 1.2 to 2 grams of protein per kilogram of body weight. That means a 150-pound person should eat 82 to 136 grams each day. People who aren't active should eat less protein. Aim for .8 grams per kilogram of body weight each day. Good sources of protein are poultry (25 grams in 3 ounces) and fish (20 grams in 3 ounces). Those who prefer to avoid meat can try soybeans (20 grams per cup) and legumes like beans, peanuts and chickpeas (about 15 grams per cup). Eggs, Greek yogurt, cheese and tofu are good sources, too."},
    {title: "Eat Breakfast", tipDesc: "Research indicates that eating breakfast every day helps with weight loss and weight maintenance by reducing hunger later in the day. When you break the overnight fast with a healthy breakfast, it's easier to resist unhealthy choices during the day. Include at least two food groups — such as whole grains, lean protein, dairy, or fruits and vegetables — at breakfast to put you on track for a day of healthy eating."},
    {title: "Drink Water", tipDesc: "Water is a crucial nutrient that often gets overlooked. Sixty percent of your body weight is made up of water and every system in your body requires it to function properly. Fluid needs depend on several factors: your health, your environment, how active you are, and if you are pregnant or breast-feeding. The Institute of Medicine recommends that men need about 13 8-ounce cups of water a day and women need nine 8-ounce cups of water a day. Sometimes thirst can be misinterpreted as hunger. Check in with your body when you feel hungry, especially later in the day. Drinking a glass of water before eating can satisfy thirst and keep you from eating unnecessary calories."}
  ];

  constructor() { }

  public getCardioTips(){
    return this.list_cardio_tips;
  }

  public getWeightliftingTips(){
    return this.list_weightlifting_tips;
  }

  public getNutritionTips(){
    return this.list_nutrition_tips;
  }
}
