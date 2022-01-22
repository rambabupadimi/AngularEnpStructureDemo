import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecordComponent } from './user-record.component';

describe('UserRecordComponent', () => {
  let component: UserRecordComponent;
  let fixture: ComponentFixture<UserRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
