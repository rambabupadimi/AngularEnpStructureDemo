import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDateFormatPipe } from './custom-date-format.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomDateFormatPipe],
  exports: [CustomDateFormatPipe],
})
export class SharedPipesDatePipeModule {}
