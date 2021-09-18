import {Component, OnDestroy} from '@angular/core';
import {UserPreferences} from './trip-steps/user-preferences';
import {GenerateTripService} from '../services/generate-trip.service';
import {TripSuggestionsData} from './trip-suggestions-data';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})

export class CreateTripComponent implements  OnDestroy {
  isTripSteps = true;
  isGenerateTripStep = false;
  userPreferences: UserPreferences;
  tripSuggestionsData: TripSuggestionsData;


  private subscriptions: Subscription;

  constructor(private generateTripService: GenerateTripService) {
  }

  submitUserSelections(userPreferences) {
    console.log('generate!!')
    this.userPreferences = userPreferences;
    this.isTripSteps = false;
    this.isGenerateTripStep = true;

    this.subscriptions.add(
        this.generateTripService.createTrip(this.userPreferences)
        .subscribe((tripSuggestionsData: TripSuggestionsData) => {
          console.log('tripSuggestionsData:', tripSuggestionsData)
          this.tripSuggestionsData = tripSuggestionsData;
        })
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
