import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  getUsers,
  getUsersLoading,
  loadUsersList,
} from '@demo-app/users/data-access';
import { Observable } from 'rxjs';
import { User } from '@demo-app/shared/data-access/models';
import { MatDialog } from '@angular/material/dialog';
import { UserAddComponent } from '../user-add/user-add.component';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
@Component({
  selector: 'demo-app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$?: Observable<User[] | undefined> = this.store.pipe(select(getUsers));

  isUsersLoading$ = this.store.pipe(select(getUsersLoading));

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(loadUsersList());
  }

  createStory() {
    this.dialog.open(UserAddComponent, {
      data: { type: 'add' },
      width: '250px',
      height: 'auto',
      disableClose: true,
    });
  }

  editStory(userId: any) {
    this.dialog.open(UserAddComponent, {
      data: { type: 'edit', id: userId },
      width: '250px',
      height: 'auto',
      disableClose: true,
    });
  }

  deleteStory(userId: any) {
    this.dialog.open(UserDeleteComponent, {
      data: { id: userId },
      width: '300px',
      height: 'auto',
      disableClose: true,
    });
  }
}
