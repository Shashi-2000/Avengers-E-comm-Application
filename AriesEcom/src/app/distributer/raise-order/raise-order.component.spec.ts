import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiseOrderComponent } from './raise-order.component';

describe('RaiseOrderComponent', () => {
  let component: RaiseOrderComponent;
  let fixture: ComponentFixture<RaiseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaiseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaiseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
