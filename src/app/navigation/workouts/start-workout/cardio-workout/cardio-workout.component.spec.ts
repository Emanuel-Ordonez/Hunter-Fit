import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioWorkoutComponent } from '@src/app/navigation/workouts/start-workout/cardio-workout/cardio-workout.component';

describe('CardioWorkoutComponent', () => {
  let component: CardioWorkoutComponent;
  let fixture: ComponentFixture<CardioWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardioWorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
