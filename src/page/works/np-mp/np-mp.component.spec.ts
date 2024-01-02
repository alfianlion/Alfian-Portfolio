import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpMpComponent } from './np-mp.component';

describe('NpMpComponent', () => {
  let component: NpMpComponent;
  let fixture: ComponentFixture<NpMpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpMpComponent]
    });
    fixture = TestBed.createComponent(NpMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
