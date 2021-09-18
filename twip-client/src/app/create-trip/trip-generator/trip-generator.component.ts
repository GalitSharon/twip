import {Component, Input, OnInit} from '@angular/core';
import {UserPreferences} from '../trip-steps/user-preferences';
import {TripSuggestionsData} from '../trip-suggestions-data';
import {Trip} from '../trip';

@Component({
  selector: 'app-trip-generator',
  templateUrl: './trip-generator.component.html',
  styleUrls: ['./trip-generator.component.css']
})
export class TripGeneratorComponent implements OnInit {
  @Input() userPreferences: UserPreferences;
  @Input() tripSuggestionsData: TripSuggestionsData;
  suggestedTrip: Trip;

  constructor() { }

  ngOnInit() {
    this.generateRandomTrip();
  }

  generateRandomTrip() {

  }


}
