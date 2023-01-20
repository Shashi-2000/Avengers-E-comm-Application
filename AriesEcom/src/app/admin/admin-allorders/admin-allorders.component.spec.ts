import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllordersComponent } from './admin-allorders.component';

describe('AdminAllordersComponent', () => {
  let component: AdminAllordersComponent;
  let fixture: ComponentFixture<AdminAllordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
