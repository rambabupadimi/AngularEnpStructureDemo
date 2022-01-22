import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from './user.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserApisService } from '@demo-app/shared/data-access/customer-portal-apis';
@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private userService: UserApisService
  ) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.loadUsersList),
      switchMap(() => {
        return this.userService.getUsersList().pipe(
          map((users) => {
            return userActions.loadUsersSuccess({
              users: users,
            });
          }),
          catchError((errorResp) => {
            const error = errorResp.error.message;
            return of(
              userActions.loadUsersFail({
                error: error,
              })
            );
          })
        );
      })
    );
  });

  createUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.createUser),
      switchMap((action) => {
        return this.userService.createUser(action.user).pipe(
          map((user) => {
            return userActions.createUserSuccess({
              user: user,
            });
          }),
          catchError((errorResp) => {
            const error = errorResp.error.message;
            return of(
              userActions.createUserFailure({
                error: error,
              })
            );
          })
        );
      })
    );
  });

  editUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.editUser),
      switchMap((action) => {
        return this.userService.editUser(action.user).pipe(
          map((user) => {
            return userActions.editUserSuccess({
              user: user,
            });
          }),
          catchError((errorResp) => {
            const error = errorResp.error.message;
            return of(
              userActions.editUserFailure({
                error: error,
              })
            );
          })
        );
      })
    );
  });

  deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userActions.deleteUser),
      switchMap((action) => {
        return this.userService.deleteUser(action.userId).pipe(
          map((message) => {
            return userActions.deleteUserSuccess({
              userId: action.userId,
              message: message,
            });
          }),
          catchError((errorResp) => {
            const error = errorResp.error.message;
            return of(
              userActions.deleteUserFailure({
                error: error,
              })
            );
          })
        );
      })
    );
  });
}
