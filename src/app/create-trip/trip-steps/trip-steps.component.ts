import {AfterContentChecked, Component, ViewChild} from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-trip-steps',
  templateUrl: './trip-steps.component.html',
  styleUrls: ['./trip-steps.component.css']
})
export class TripStepsComponent implements AfterContentChecked {
  private stepper: Stepper;
  @ViewChild('stepperElm') stepperElm: any;
  activeStep = 1;

  next() {
    this.activeStep = ++this.activeStep;
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  ngAfterContentChecked() {
    if (this.stepperElm && !this.stepper) {
      this.stepper = new Stepper(this.stepperElm.nativeElement, {
        linear: true,
        animation: true
      })
    }
  }



}
