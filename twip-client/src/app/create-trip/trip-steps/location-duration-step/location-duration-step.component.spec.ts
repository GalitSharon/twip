import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDurationStepComponent } from './location-duration-step.component';

describe('LocationDurationStepComponent', () => {
  let component: LocationDurationStepComponent;
  let fixture: ComponentFixture<LocationDurationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationDurationStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDurationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
