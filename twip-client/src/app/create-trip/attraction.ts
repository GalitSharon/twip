import {AttractionType} from './trip-steps/attraction';


export interface Attraction {
    attractionType: AttractionType;
    address: string;
    desc?: string;
}
