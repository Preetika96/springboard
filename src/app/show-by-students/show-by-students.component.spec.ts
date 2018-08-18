import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowByStudentsComponent } from './show-by-students.component';

describe('ShowByStudentsComponent', () => {
  let component: ShowByStudentsComponent;
  let fixture: ComponentFixture<ShowByStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowByStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowByStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
