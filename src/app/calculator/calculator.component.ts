import {Component} from '@angular/core';
import {AbstractControl, FormControl, ValidatorFn, Validators} from '@angular/forms';
import {CalculatorService} from '../shared/services/calculator.service';
import {ResponseModel} from '../shared/models/response.model';
import { Store } from '@ngrx/store';
import {displayResult} from '../shared/redux/actions/calculator.actions';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  firstOperand: number;
  secondOperand: number;
  firstNumberFormControl: FormControl;
  secondNumberFormControl: FormControl;

  constructor(private calculatorService: CalculatorService,
              private store: Store) {
    this.firstOperand = 10;
    this.secondOperand = 10;

    this.firstNumberFormControl = new FormControl(this.firstOperand, [
      Validators.required
    ]);

    this.secondNumberFormControl = new FormControl(this.secondOperand, [
      Validators.required,
      this.forbiddenNameValidator(0)
    ]);
  }

  isSecondOperatorZero(): boolean {
    return this.secondOperand === 0;
  }
  doOperation(operation: string): void {
    this.calculatorService.sendOperation(operation, this.firstOperand, this.secondOperand).
      subscribe((responseModel: ResponseModel) => {
        console.log(responseModel);
        this.store.dispatch(displayResult({responseModel}));
      });
  }
  forbiddenNameValidator(invalidNumber: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = (control.value === invalidNumber);
      return forbidden ? {forbiddenValue: {value: control.value}} : null;
    };
  }
}
