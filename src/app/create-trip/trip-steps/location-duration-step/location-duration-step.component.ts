import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Country} from './country';
import {predefinedCountries} from './predefined-countries';

@Component({
  selector: 'app-location-duration-step',
  templateUrl: './location-duration-step.component.html',
  styleUrls: ['./location-duration-step.component.scss']
})
export class LocationDurationStepComponent implements OnInit {
  @Output() next = new EventEmitter();
  // country: any; // TODO change type to Country, City, Address
  // city: any;
  // address: any;
  form: FormGroup;

  predefinedCountries = predefinedCountries;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      country: [null, Validators.required],
      city: [null, Validators.required],
      address: [null],
      duration: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.next.emit(this.form);
    }
  }

  onCountrySelected($event: Country) {
    // TODO show city dropdown
  }

}
