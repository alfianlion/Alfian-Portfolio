import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JigsawmeComponent } from './jigsawme.component';

describe('JigsawmeComponent', () => {
  let component: JigsawmeComponent;
  let fixture: ComponentFixture<JigsawmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JigsawmeComponent]
    });
    fixture = TestBed.createComponent(JigsawmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
