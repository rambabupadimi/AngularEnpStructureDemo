import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRecordComponent } from './user-record/user-record.component';
import { SharedPipesDatePipeModule } from '@demo-app/shared/pipes/date-pipe';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { UserAddFormComponent } from './user-add-form/user-add-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    SharedPipesDatePipeModule,
    SvgIconsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  declarations: [UserRecordComponent, UserAddFormComponent],
  exports: [UserRecordComponent, UserAddFormComponent],
})
export class UsersUiUserRecordModule {}
