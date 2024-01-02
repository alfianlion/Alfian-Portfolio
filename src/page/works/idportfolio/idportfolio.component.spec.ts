import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDPortfolioComponent } from './idportfolio.component';

describe('IDPortfolioComponent', () => {
  let component: IDPortfolioComponent;
  let fixture: ComponentFixture<IDPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IDPortfolioComponent]
    });
    fixture = TestBed.createComponent(IDPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
