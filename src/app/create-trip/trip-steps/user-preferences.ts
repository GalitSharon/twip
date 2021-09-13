import {Attraction} from './attraction';
import {TripRate} from './trip-rate';
import {RestaurantType} from './restaurantType';

export class UserPreferences {
    country: any; // TODO change type to Country, City, Address
    city: any;
    address: any;
    duration: number;
    tripRate: TripRate;
    selectedAttractions: Attraction[];
    restaurantsTypes: RestaurantType[];
}
