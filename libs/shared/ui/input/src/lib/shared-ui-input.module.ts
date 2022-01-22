import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  declarations: [InputComponent],
  exports: [InputComponent],
})
export class SharedUiInputModule {}
