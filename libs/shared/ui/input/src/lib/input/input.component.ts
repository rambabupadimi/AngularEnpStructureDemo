import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'demo-app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements ControlValueAccessor {
  @Input() labelName?: string;
  @Input() error?: string = '';
  @Input() inputLength = 100;
  @Input() inputType?: string;
  @Input() formControlName?: string;

  value: any = '';

  onChange: any = () => {
    console.log('called on change');
  };

  onTouched: any = () => {
    console.log('called ontouch');
  };

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
