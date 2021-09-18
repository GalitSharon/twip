import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {RestaurantType} from '../restaurantType';
import {restaurantsTypes} from '../restaurantsTypes';

@Component({
  selector: 'app-advanced-preferences-step',
  templateUrl: './advanced-preferences-step.component.html',
  styleUrls: ['./advanced-preferences-step.component.css']
})
export class AdvancedPreferencesStepComponent implements OnInit {
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter();
  form: FormGroup;
  restaurantsTypes: RestaurantType[] = restaurantsTypes;
  selectedRestaurantTypes: number[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      restaurantsTypes: this.formBuilder.array([])
    });
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('restaurantsTypes') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
      this.selectedRestaurantTypes.push(Number(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          this.selectedRestaurantTypes.splice(i, 1)
          return;
        }
        i++;
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.next.emit(this.form);
    }
  }

}
