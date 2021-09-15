import {AfterContentChecked, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import Stepper from 'bs-stepper';
import {attractionsList} from './attractionsList';
import {restaurantsTypes} from './restaurantsTypes';
import {UserPreferences} from './user-preferences';

@Component({
  selector: 'app-trip-steps',
  templateUrl: './trip-steps.component.html',
  styleUrls: ['./trip-steps.component.css']
})
export class TripStepsComponent implements AfterContentChecked {
  @Output() submitUserSelections = new EventEmitter();
  @ViewChild('stepperElm') stepperElm: any;
  activeStep = 1; // TODO - remove if not necessary
  userPreferences = new UserPreferences();
  private stepper: Stepper;


  nextToStep2(locationDurationForm) {
    this.updateLocationAndDuration(locationDurationForm.controls);
    this.activeStep = ++this.activeStep;
    this.stepper.next();
  }

  nextToStep3(tripStyleForm) {
    this.updateTripStyle(tripStyleForm.controls);
    this.activeStep = ++this.activeStep;
    this.stepper.next();
  }

  nextToCreateTrip(userPreferences) {
    console.log('TripStepsComponent submit');
    this.updateAdvancedPreferences(userPreferences.controls);
    this.activeStep = ++this.activeStep;
    this.submitUserSelections.emit(this.userPreferences);
  }

  prev() {
    this.activeStep = --this.activeStep;
    this.stepper.previous();
  }

  ngAfterContentChecked() {
    if (this.stepperElm && !this.stepper) {
      this.stepper = new Stepper(this.stepperElm.nativeElement, {
        linear: true,
        animation: true
      })
    }
  }

  updateLocationAndDuration(userSelections) {
    this.userPreferences.country = userSelections.country.value;
    this.userPreferences.city = userSelections.city.value;
    this.userPreferences.address = userSelections.address.value;
    this.userPreferences.duration = userSelections.duration.value;
  }

  updateTripStyle(userSelections) {
    this.userPreferences.tripRate =  userSelections.tripRate.value;
    this.userPreferences.selectedAttractions = userSelections.selectedAttractions.value.map(attractionValue => {
      const attValue = Number(attractionValue);
      const attDesc = attractionsList.find(att => att.value === attValue);
      return {value: attValue, desc: attDesc}
    });
  }

  updateAdvancedPreferences(userPreferences) {
    this.userPreferences.restaurantsTypes = userPreferences.restaurantsTypes.value.map(restaurantValue => {
      const resValue = Number(restaurantValue);
      const resDesc = restaurantsTypes.find(res => res.value === resValue);
      return {value: resValue, desc: resDesc}
    });
  }

}
