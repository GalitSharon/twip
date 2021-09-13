import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {attractionsList} from '../attractionsList';
import {Attraction} from '../attraction';


@Component({
  selector: 'app-trip-style-step',
  templateUrl: './trip-style-step.component.html',
  styleUrls: ['./trip-style-step.component.css']
})

export class TripStyleStepComponent implements OnInit {
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter()
  form: FormGroup;
  attractions: Attraction[] = attractionsList;
  selectedAttractions: number[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.attractions = attractionsList;
  }

  initForm() {
    this.form = this.formBuilder.group({
      tripRate: [2, Validators.required],
      selectedAttractions: this.formBuilder.array([])
    });
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('selectedAttractions') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
      this.selectedAttractions.push(Number(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          this.selectedAttractions.splice(i, 1)
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
