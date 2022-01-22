import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { SVG_CONFIG } from '@ngneat/svg-icon/lib/types';

@Component({
  selector: 'demo-app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent implements OnInit {
  @Input() size: keyof SVG_CONFIG['sizes'] = 'xl';

  ngOnInit(): void {
    console.log('init');
  }
}
