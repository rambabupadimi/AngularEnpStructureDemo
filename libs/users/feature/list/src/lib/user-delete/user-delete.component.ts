import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  closeDeleteDialogSuccess,
  deleteUser,
  getDeleteDialogStatus,
} from '@demo-app/users/data-access';
import { select, Store } from '@ngrx/store';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'demo-app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css'],
})
export class UserDeleteComponent implements OnInit {
  userDialogStatus$ = this.store.pipe(select(getDeleteDialogStatus));

  constructor(
    private dialogRef: MatDialogRef<UserAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.userDialogStatus$.subscribe((response) => {
      if (response) {
        this.dialogRef.close();
        this.store.dispatch(closeDeleteDialogSuccess());
      }
    });
  }

  delete() {
    this.store.dispatch(deleteUser({ userId: this.data.id }));
  }
}
