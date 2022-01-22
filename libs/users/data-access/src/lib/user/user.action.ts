import { User } from '@demo-app/shared/data-access/models';
import { createAction, props } from '@ngrx/store';

export const loadUsersList = createAction('[USERS] Load users');

export const loadUsersSuccess = createAction(
  '[USERS] Load usrs success',
  props<{ users: any }>()
);

export const loadUsersFail = createAction(
  '[USERS] Load users fail',
  props<{ error: string }>()
);

export const createUser = createAction(
  '[USERS] Create user',
  props<{ user: User }>()
);

export const createUserSuccess = createAction(
  '[USERS] Create user success',
  props<{ user: User }>()
);

export const createUserFailure = createAction(
  '[USERS] Create user failure',
  props<{ error: string }>()
);

export const editUser = createAction(
  '[USERS] Edit user',
  props<{ user: User }>()
);

export const editUserSuccess = createAction(
  '[USERS] Edit user success',
  props<{ user: User }>()
);

export const editUserFailure = createAction(
  '[USERS] Edit user failure',
  props<{ error: string }>()
);

export const deleteUser = createAction(
  '[USERS] Delete user',
  props<{ userId: number }>()
);

export const deleteUserSuccess = createAction(
  '[USERS] Delete user success',
  props<{ userId: number; message: string }>()
);

export const deleteUserFailure = createAction(
  '[USERS] Delete user failure',
  props<{ error: string }>()
);

export const closeUserAddDialog = createAction('[USERS] Close user add dialog');

export const closeDeleteDialog = createAction('[USERS] Close delete dialog');

export const closeUserAddDialogSuccess = createAction(
  '[USERS] Close user add dialog success'
);
export const closeDeleteDialogSuccess = createAction(
  '[USERS] Close user add dialog success'
);
