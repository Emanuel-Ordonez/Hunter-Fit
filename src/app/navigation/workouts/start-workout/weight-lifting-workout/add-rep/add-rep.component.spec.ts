import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRepComponent } from '@src/app/navigation/workouts/start-workout/weight-lifting-workout/add-rep/add-rep.component';

describe('AddRepComponent', () => {
  let component: AddRepComponent;
  let fixture: ComponentFixture<AddRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
