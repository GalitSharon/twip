import {Component, OnDestroy} from '@angular/core';
import {UserPreferences} from './trip-steps/user-preferences';
import {GenerateTripService} from '../services/generate-trip.service';
import {TripSuggestionsData} from './trip-suggestions-data';
import {Subscription} from 'rxjs/Subscription';
import {tripSuggestion} from './mocks/trip-suggestion';
import {userPreferencess} from './mocks/user-preferences';


@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.css']
})

export class CreateTripComponent implements  OnDestroy {
  isTripSteps = true;
  isGenerateTripStep = false;

  // userPreferences: UserPreferences;
  userPreferences: UserPreferences = userPreferencess; // TODO delete
  // tripSuggestionsData: TripSuggestionsData[] = [];
  tripSuggestionsData: TripSuggestionsData[] = tripSuggestion; // TODO delete
  private subscriptions: Subscription;

  constructor(private generateTripService: GenerateTripService) {
  }

  submitUserSelections(userPreferences) {
    this.userPreferences = userPreferences;
    this.isTripSteps = false;
    this.isGenerateTripStep = true;

    // this.subscriptions.add( // TODO - remove comment
    //     this.generateTripService.createTrip(this.userPreferences)
    //     .subscribe((tripSuggestionsData: TripSuggestionsData[]) => {
    //       console.log('tripSuggestionsData:', tripSuggestionsData)
    //       this.tripSuggestionsData = tripSuggestionsData;
    //     })
    // )
    this.tripSuggestionsData = tripSuggestion; // TODO delete
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
