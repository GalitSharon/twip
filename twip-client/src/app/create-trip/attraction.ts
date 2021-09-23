import {AttractionType} from './trip-steps/attraction';


export interface Attraction {
    attractionType: AttractionType;
    name: string;
    address: string;
    desc?: string;
    image?: string;
    website?: string;
}
