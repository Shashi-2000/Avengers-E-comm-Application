import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuProfileComponent } from './au-profile.component';

describe('AuProfileComponent', () => {
  let component: AuProfileComponent;
  let fixture: ComponentFixture<AuProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
