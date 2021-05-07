import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightLiftingWorkoutComponent } from '@src/app/start-workout/weight-lifting-workout/weight-lifting-workout.component';

describe('WeightLiftingWorkoutComponent', () => {
  let component: WeightLiftingWorkoutComponent;
  let fixture: ComponentFixture<WeightLiftingWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightLiftingWorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightLiftingWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
