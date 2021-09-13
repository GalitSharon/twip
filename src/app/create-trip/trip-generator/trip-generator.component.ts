import {Component, Input, OnInit} from '@angular/core';
import {UserPreferences} from '../trip-steps/user-preferences';

@Component({
  selector: 'app-trip-generator',
  templateUrl: './trip-generator.component.html',
  styleUrls: ['./trip-generator.component.css']
})
export class TripGeneratorComponent implements OnInit {
  @Input() userPreferences: UserPreferences;

  constructor() { }

  ngOnInit(): void {
  }

}
