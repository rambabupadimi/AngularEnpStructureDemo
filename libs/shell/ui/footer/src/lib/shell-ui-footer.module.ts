import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterLayoutComponent],
  exports: [FooterLayoutComponent],
})
export class ShellUiFooterModule {}
