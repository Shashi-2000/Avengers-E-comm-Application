import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhOrdersComponent } from './wh-orders.component';

describe('WhOrdersComponent', () => {
  let component: WhOrdersComponent;
  let fixture: ComponentFixture<WhOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
