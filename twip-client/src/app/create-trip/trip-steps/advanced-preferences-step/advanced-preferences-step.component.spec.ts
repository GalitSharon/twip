import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPreferencesStepComponent } from './advanced-preferences-step.component';

describe('AdvancedPreferencesStepComponent', () => {
  let component: AdvancedPreferencesStepComponent;
  let fixture: ComponentFixture<AdvancedPreferencesStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedPreferencesStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedPreferencesStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
