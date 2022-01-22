import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '@demo-app/shared/data-access/models';
import {
  closeUserAddDialogSuccess,
  createUser,
  editUser,
  getAddUserDialogStatus,
  getUserDetails,
} from '@demo-app/users/data-access';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'demo-app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit {
  userDialogStatus$ = this.store.pipe(select(getAddUserDialogStatus));
  user: User | undefined;
  type?: string;

  constructor(
    private dialogRef: MatDialogRef<UserAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {
    this.type = this.data.type;
  }

  ngOnInit(): void {
    if (this.type === 'edit') {
      const user$ = this.store.pipe(select(getUserDetails(this.data.id)));
      user$.subscribe((response: any) => {
        this.user = response;
      });
    }

    this.userDialogStatus$.subscribe((response) => {
      if (response) {
        this.dialogRef.close();
        this.store.dispatch(closeUserAddDialogSuccess());
      }
    });
  }

  saveUserForm(data: any) {
    if (this.type === 'add') {
      const user = { ...data, id: new Date().getTime() };
      this.store.dispatch(createUser({ user }));
    } else {
      const user = { ...data, id: this.user?.id };
      this.store.dispatch(editUser({ user }));
    }
  }

  cancelForm() {
    this.dialogRef.close();
    this.store.dispatch(closeUserAddDialogSuccess());
  }
}
