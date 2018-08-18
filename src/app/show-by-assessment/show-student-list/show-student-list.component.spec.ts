import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentListComponent } from './show-student-list.component';

describe('ShowStudentListComponent', () => {
  let component: ShowStudentListComponent;
  let fixture: ComponentFixture<ShowStudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStudentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
