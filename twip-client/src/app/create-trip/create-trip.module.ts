import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TripStepsComponent} from './trip-steps/trip-steps.component';
import {CreateTripComponent} from './create-trip.component';
import { MatStepperModule } from '@angular/material/stepper';
import { LocationDurationStepComponent } from './trip-steps/location-duration-step/location-duration-step.component';
import { TripStyleStepComponent } from './trip-steps/trip-style-step/trip-style-step.component';
import { AdvancedPreferencesStepComponent } from './trip-steps/advanced-preferences-step/advanced-preferences-step.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClientModule} from '@angular/common/http';
import { TripGeneratorComponent } from './trip-generator/trip-generator.component';


@NgModule({
  declarations: [
    CreateTripComponent,
    TripStepsComponent,
    LocationDurationStepComponent,
    TripStyleStepComponent,
    AdvancedPreferencesStepComponent,
    TripGeneratorComponent,
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectCountryModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CreateTripModule { }
