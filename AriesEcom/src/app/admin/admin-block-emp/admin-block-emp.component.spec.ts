import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlockEmpComponent } from './admin-block-emp.component';

describe('AdminBlockEmpComponent', () => {
  let component: AdminBlockEmpComponent;
  let fixture: ComponentFixture<AdminBlockEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlockEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBlockEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
