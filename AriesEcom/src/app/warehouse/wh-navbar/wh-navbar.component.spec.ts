import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhNavbarComponent } from './wh-navbar.component';

describe('WhNavbarComponent', () => {
  let component: WhNavbarComponent;
  let fixture: ComponentFixture<WhNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
