import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightliftingDetailsComponent } from '@src/app/navigation/profile/weightlifting-details/weightlifting-details.component';

describe('WeightliftingDetailsComponent', () => {
  let component: WeightliftingDetailsComponent;
  let fixture: ComponentFixture<WeightliftingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightliftingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightliftingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
