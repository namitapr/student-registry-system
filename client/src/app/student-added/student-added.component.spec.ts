import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddedComponent } from './student-added.component';

describe('StudentAddedComponent', () => {
  let component: StudentAddedComponent;
  let fixture: ComponentFixture<StudentAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
