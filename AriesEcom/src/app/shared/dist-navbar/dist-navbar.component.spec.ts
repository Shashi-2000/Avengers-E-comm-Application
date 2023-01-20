import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistNavbarComponent } from './dist-navbar.component';

describe('DistNavbarComponent', () => {
  let component: DistNavbarComponent;
  let fixture: ComponentFixture<DistNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
