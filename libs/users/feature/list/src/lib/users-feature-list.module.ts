import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SharedUiSpinnerModule } from '@demo-app/shared/ui/spinner';
import { UsersUiUserRecordModule } from '@demo-app/users/ui/user-record';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedUiInputModule } from '@demo-app/shared/ui/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedUiSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedUiInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserListComponent,
      },
    ]),
    UsersUiUserRecordModule,
  ],
  declarations: [UserListComponent, UserAddComponent, UserDeleteComponent],
})
export class UsersFeatureListModule {}
