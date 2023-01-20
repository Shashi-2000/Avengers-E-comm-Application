import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhAddStockComponent } from './wh-add-stock.component';

describe('WhAddStockComponent', () => {
  let component: WhAddStockComponent;
  let fixture: ComponentFixture<WhAddStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhAddStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhAddStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
