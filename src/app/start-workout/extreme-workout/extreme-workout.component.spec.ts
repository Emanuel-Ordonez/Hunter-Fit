import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtremeWorkoutComponent } from '@src/app/start-workout/extreme-workout/extreme-workout.component';

describe('ExtremeWorkoutComponent', () => {
  let component: ExtremeWorkoutComponent;
  let fixture: ComponentFixture<ExtremeWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtremeWorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtremeWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
