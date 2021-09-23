import {RestaurantType} from './trip-steps/restaurantType';

export interface Restaurant {
    restaurantType: RestaurantType;
    name: string;
    address: string;
    desc?: string;
    image?: string;
    website?: string;
}
