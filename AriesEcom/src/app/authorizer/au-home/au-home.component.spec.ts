import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuHomeComponent } from './au-home.component';

describe('AuHomeComponent', () => {
  let component: AuHomeComponent;
  let fixture: ComponentFixture<AuHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
