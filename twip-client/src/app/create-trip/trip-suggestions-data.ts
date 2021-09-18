import {Restaurant} from './restaurant';
import {Attraction} from './attraction';

export interface TripSuggestionsData {
    restaurants: Restaurant[];
    attractions: Attraction[];
}
