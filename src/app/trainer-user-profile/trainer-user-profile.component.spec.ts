import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerUserProfileComponent } from './trainer-user-profile.component';

describe('TrainerUserProfileComponent', () => {
  let component: TrainerUserProfileComponent;
  let fixture: ComponentFixture<TrainerUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
