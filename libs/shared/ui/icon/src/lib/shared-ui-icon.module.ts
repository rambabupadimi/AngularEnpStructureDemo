import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { asAudioAnimatedIcon } from './svg/audio-animated';
import { asDeleteIcon } from './svg/delete';
import { asEditIcon } from './svg/edit';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [asAudioAnimatedIcon, asDeleteIcon, asEditIcon],
    }),
  ],
  exports: [SvgIconsModule],
})
export class SharedUiIconModule {}
