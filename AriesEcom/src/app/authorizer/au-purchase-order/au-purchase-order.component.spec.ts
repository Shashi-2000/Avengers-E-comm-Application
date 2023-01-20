import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuPurchaseOrderComponent } from './au-purchase-order.component';

describe('AuPurchaseOrderComponent', () => {
  let component: AuPurchaseOrderComponent;
  let fixture: ComponentFixture<AuPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuPurchaseOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
