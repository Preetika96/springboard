import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowByAssessmentComponent } from './show-by-assessment.component';

describe('ShowByAssessmentComponent', () => {
  let component: ShowByAssessmentComponent;
  let fixture: ComponentFixture<ShowByAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowByAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowByAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
