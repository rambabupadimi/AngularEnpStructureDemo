import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shellRoutes } from './shell-feature-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedUiIconModule } from '@demo-app/shared/ui/icon';
import { ShellUiLayoutModule } from '@demo-app/shell/ui/layout';

@NgModule({
  imports: [
    CommonModule,
    SharedUiIconModule,
    RouterModule.forRoot(shellRoutes, {
      scrollPositionRestoration: 'top',
    }),
    ShellUiLayoutModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
  ],
})
export class ShellFeatureModule {}
