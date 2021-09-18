import {RestaurantType} from './trip-steps/restaurantType';

export interface Restaurant {
    restaurantType: RestaurantType;
    address: string;
    desc?: string;
}
