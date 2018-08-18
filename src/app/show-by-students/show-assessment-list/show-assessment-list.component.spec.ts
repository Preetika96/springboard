import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAssessmentListComponent } from './show-assessment-list.component';

describe('ShowAssessmentListComponent', () => {
  let component: ShowAssessmentListComponent;
  let fixture: ComponentFixture<ShowAssessmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAssessmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAssessmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
