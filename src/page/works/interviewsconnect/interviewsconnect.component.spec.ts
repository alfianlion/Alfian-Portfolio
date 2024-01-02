import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewsconnectComponent } from './interviewsconnect.component';

describe('InterviewsconnectComponent', () => {
  let component: InterviewsconnectComponent;
  let fixture: ComponentFixture<InterviewsconnectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewsconnectComponent]
    });
    fixture = TestBed.createComponent(InterviewsconnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
