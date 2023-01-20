import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhProfileComponent } from './wh-profile.component';

describe('WhProfileComponent', () => {
  let component: WhProfileComponent;
  let fixture: ComponentFixture<WhProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
