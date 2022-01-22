import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@demo-app/shared/data-access/models';

@Component({
  selector: 'demo-app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css'],
})
export class UserAddFormComponent implements OnInit {
  userForm: any = FormGroup;
  @Output() userFormSaveEvent = new EventEmitter<any>();
  @Output() userFormCancelEvent = new EventEmitter<any>();
  @Input() dialogType?: string;
  @Input() userData?: User;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
    if (this.dialogType === 'edit') {
      this.userForm.patchValue({
        name: this.userData?.name,
        email: this.userData?.email,
        message: this.userData?.message,
      });
    }
  }

  save() {
    if (this.userForm.valid) {
      this.userFormSaveEvent.emit(this.userForm.value);
    }
  }

  cancel() {
    this.userFormCancelEvent.emit();
  }
}
