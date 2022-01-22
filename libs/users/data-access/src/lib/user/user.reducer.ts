import { User } from '@demo-app/shared/data-access/models';
import { createReducer, on } from '@ngrx/store';
import { closeDeleteDialog, closeUserAddDialogSuccess } from '.';
import {
  closeDeleteDialogSuccess,
  createUserFailure,
  createUserSuccess,
  deleteUser,
  deleteUserFailure,
  deleteUserSuccess,
  editUser,
  editUserFailure,
  editUserSuccess,
} from './user.action';

import {
  loadUsersFail,
  loadUsersList,
  loadUsersSuccess,
  createUser,
} from './user.action';
import { initState } from './user.store';

export const usersFeatureKey = 'users';

export const userReducer = createReducer(
  initState,
  on(loadUsersList, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    error: null,
    isLoading: false,
  })),
  on(loadUsersFail, (state, { error }) => ({
    ...state,
    user: [],
    error: error,
    isLoading: false,
  })),
  on(createUser, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(createUserSuccess, (state, { user }) => {
    const updatedUsers = getAddUsers(state, user);

    return {
      ...state,
      users: updatedUsers,
      isLoading: false,
      error: null,
      addEditDialog: true,
    };
  }),
  on(createUserFailure, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  on(editUser, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(editUserSuccess, (state, { user }) => {
    const updatedUsers = getEditUsers(state, user);
    console.log('updated users--', updatedUsers);
    return {
      ...state,
      users: updatedUsers,
      isLoading: false,
      error: null,
      addEditDialog: true,
    };
  }),
  on(editUserFailure, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  on(deleteUser, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(deleteUserSuccess, (state, { userId, message }) => {
    const users = getDeleteUsers(state, userId);
    return {
      ...state,
      users: users,
      isLoading: false,
      error: null,
      deleteDialog: true,
    };
  }),
  on(deleteUserFailure, (state, { error }) => {
    return {
      ...state,
      isLoading: false,
      error: error,
    };
  }),
  on(closeUserAddDialogSuccess, (state) => {
    return {
      ...state,
      addEditDialog: false,
    };
  }),
  on(closeDeleteDialogSuccess, (state) => {
    return {
      ...state,
      deleteDialog: false,
    };
  })
);

const getAddUsers = (state: any, user: User) => {
  const users = [...state.users];
  users.push(user);
  return users;
};

const getEditUsers = (state: any, user: User) => {
  return state.users.map((userItem: any) => {
    return userItem.id == user.id ? user : userItem;
  });
};

const getDeleteUsers = (state: any, userId: number) => {
  const index = state.users.findIndex((item: any) => item.id === userId);
  const users = [...state.users];
  users.splice(index, 1);
  return users;
};
