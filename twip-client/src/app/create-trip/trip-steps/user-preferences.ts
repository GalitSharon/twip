import {AttractionType} from './attraction';
import {TripRate} from './trip-rate';
import {RestaurantType} from './restaurantType';

export class UserPreferences {
    country: any; // TODO change type to Country, City, Address
    city: any;
    address: string;
    duration: number;
    tripRate: TripRate;
    attractionsTypes: AttractionType[];
    restaurantsTypes: RestaurantType[];
}
