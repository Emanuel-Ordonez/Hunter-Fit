import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWorkoutDetailsComponent } from '@src/app/navigation/profile/profile-workout-details/profile-workout-details.component';

describe('ProfileWorkoutDetailsComponent', () => {
  let component: ProfileWorkoutDetailsComponent;
  let fixture: ComponentFixture<ProfileWorkoutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWorkoutDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWorkoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
