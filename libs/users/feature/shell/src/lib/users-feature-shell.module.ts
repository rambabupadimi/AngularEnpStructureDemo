import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import {
  usersFeatureKey,
  userReducer,
  UserEffects,
} from '@demo-app/users/data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: async () =>
          (await import('@demo-app/users/feature/list')).UsersFeatureListModule,
      },
      {
        path: 'details',
        loadChildren: async () =>
          (await import('@demo-app/users/feature/details'))
            .UsersFeatureDetailsModule,
      },
    ]),
    StoreModule.forFeature(usersFeatureKey, userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UsersFeatureShellModule {}
