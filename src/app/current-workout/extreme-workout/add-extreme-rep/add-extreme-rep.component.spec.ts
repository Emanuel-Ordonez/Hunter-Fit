import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExtremeRepComponent } from '@src/app/current-workout/extreme-workout/add-extreme-rep/add-extreme-rep.component';

describe('AddExtremeRepComponent', () => {
  let component: AddExtremeRepComponent;
  let fixture: ComponentFixture<AddExtremeRepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExtremeRepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExtremeRepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
