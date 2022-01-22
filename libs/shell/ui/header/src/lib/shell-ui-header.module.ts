import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderLayoutComponent],
  exports: [HeaderLayoutComponent],
})
export class ShellUiHeaderModule {}
