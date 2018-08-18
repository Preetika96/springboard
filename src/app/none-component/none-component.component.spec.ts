import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoneComponentComponent } from './none-component.component';

describe('NoneComponentComponent', () => {
  let component: NoneComponentComponent;
  let fixture: ComponentFixture<NoneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
