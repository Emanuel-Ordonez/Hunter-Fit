import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioDetailsComponent } from '@src/app/navigation/profile/cardio-details/cardio-details.component';

describe('CardioDetailsComponent', () => {
  let component: CardioDetailsComponent;
  let fixture: ComponentFixture<CardioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardioDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
