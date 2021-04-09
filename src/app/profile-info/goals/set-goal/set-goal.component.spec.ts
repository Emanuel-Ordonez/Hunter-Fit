import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGoalComponent } from '@src/app/profile-info/goals/set-goal/set-goal.component';

describe('SetGoalComponent', () => {
  let component: SetGoalComponent;
  let fixture: ComponentFixture<SetGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
