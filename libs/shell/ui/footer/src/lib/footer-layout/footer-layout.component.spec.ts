import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLayoutComponent } from './footer-layout.component';

describe('FooterLayoutComponent', () => {
  let component: FooterLayoutComponent;
  let fixture: ComponentFixture<FooterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
