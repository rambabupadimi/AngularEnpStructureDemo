import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ShellUiHeaderModule } from '@demo-app/shell/ui/header';
import { ShellUiFooterModule } from '@demo-app/shell/ui/footer';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    ShellUiHeaderModule,
    ShellUiFooterModule,
    RouterModule,
  ],
  declarations: [MainLayoutComponent],
  exports: [MainLayoutComponent],
})
export class ShellUiLayoutModule {}
