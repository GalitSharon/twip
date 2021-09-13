import {Component} from '@angular/core';
import {UserPreferences} from './trip-steps/user-preferences';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})

export class CreateTripComponent   {
  isTripSteps = true;
  isGenerateTripStep = false;
  userPreferences: UserPreferences;

  submitUserSelections(userPreferences) {
    console.log('generate!!')
    this.userPreferences = userPreferences;
    this.isTripSteps = false;
    this.isGenerateTripStep = true;
  }

}
