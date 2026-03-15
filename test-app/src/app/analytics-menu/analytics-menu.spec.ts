import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsMenu } from './analytics-menu';

describe('AnalyticsMenu', () => {
  let component: AnalyticsMenu;
  let fixture: ComponentFixture<AnalyticsMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalyticsMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
