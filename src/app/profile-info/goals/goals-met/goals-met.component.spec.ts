import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsMetComponent } from '@src/app/profile-info/goals/goals-met/goals-met.component';

describe('GoalsMetComponent', () => {
  let component: GoalsMetComponent;
  let fixture: ComponentFixture<GoalsMetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsMetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsMetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
