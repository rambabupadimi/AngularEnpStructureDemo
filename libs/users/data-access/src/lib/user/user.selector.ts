import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.store';
import { usersFeatureKey } from './user.reducer';
import { User } from '@demo-app/shared/data-access/models';

export const getUserState = createFeatureSelector<UserState>(usersFeatureKey);

export const getUsers = createSelector(getUserState, (state) => state.users);

export const getUsersLoading = createSelector(
  getUserState,
  (state) => state.isLoading
);

export const getAddUserDialogStatus = createSelector(
  getUserState,
  (state) => state.addEditDialog
);

export const getDeleteDialogStatus = createSelector(
  getUserState,
  (state) => state.deleteDialog
);

export const getUserDetails = (id: number) => {
  return createSelector(getUserState, (state: UserState) => {
    const user = state.users?.filter((user: any) => {
      if (user.id === id) {
        return user;
      }
    });
    return user ? user[0] : [];
  });
};
