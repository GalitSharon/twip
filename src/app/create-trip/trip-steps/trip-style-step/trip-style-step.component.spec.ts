import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripStyleStepComponent } from './trip-style-step.component';

describe('TripStyleStepComponent', () => {
  let component: TripStyleStepComponent;
  let fixture: ComponentFixture<TripStyleStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripStyleStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripStyleStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
