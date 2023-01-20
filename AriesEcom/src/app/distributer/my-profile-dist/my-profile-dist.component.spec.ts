import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileDistComponent } from './my-profile-dist.component';

describe('MyProfileDistComponent', () => {
  let component: MyProfileDistComponent;
  let fixture: ComponentFixture<MyProfileDistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileDistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfileDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
