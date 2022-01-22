import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SVG_CONFIG } from '@ngneat/svg-icon/lib/types';

@Component({
  selector: 'demo-app-user-record',
  templateUrl: './user-record.component.html',
  styleUrls: ['./user-record.component.scss'],
})
export class UserRecordComponent implements OnInit {
  @Input() name?: string;
  @Input() email?: string;
  @Input() phone?: string;
  @Input() message?: string;
  @Input() size: keyof SVG_CONFIG['sizes'] = 'md';

  @Output() editItemEvent = new EventEmitter();
  @Output() deleteItemEvent = new EventEmitter();

  currentDate = new Date();

  ngOnInit(): void {
    console.log('test');
  }

  editItem() {
    this.editItemEvent.emit();
  }

  deleteItem() {
    this.deleteItemEvent.emit();
  }
}
