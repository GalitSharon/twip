import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {attractionsList} from '../attractionsList';
import {AttractionType} from '../attraction';


@Component({
  selector: 'app-trip-style-step',
  templateUrl: './trip-style-step.component.html',
  styleUrls: ['./trip-style-step.component.css']
})

export class TripStyleStepComponent implements OnInit {
  @Output() prev = new EventEmitter();
  @Output() next = new EventEmitter()
  form: FormGroup;
  attractions: AttractionType[] = attractionsList;
  attractionsTypes: number[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.attractions = attractionsList;
  }

  initForm() {
    this.form = this.formBuilder.group({
      tripRate: [1, Validators.required],
      attractionsTypes: this.formBuilder.array([])
    });
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('attractionsTypes') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
      this.attractionsTypes.push(Number(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          this.attractionsTypes.splice(i, 1)
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
