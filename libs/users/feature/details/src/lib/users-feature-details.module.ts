import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserDetailsComponent,
      },
    ]),
  ],
  declarations: [UserDetailsComponent],
})
export class UsersFeatureDetailsModule {}
