import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserPreferences} from '../create-trip/trip-steps/user-preferences';
import {TripSuggestionsData} from '../create-trip/trip-suggestions-data';
import {Observable} from 'rxjs';


const serverUrl = 'http://localhost:3000/trip'

@Injectable({
    providedIn: 'root'
})
export class GenerateTripService {

    constructor(private http: HttpClient) {
    }

    createTrip(tripPreferences: UserPreferences): Observable<TripSuggestionsData> {
        return this.http.post<TripSuggestionsData>(serverUrl, tripPreferences);
    }
}
