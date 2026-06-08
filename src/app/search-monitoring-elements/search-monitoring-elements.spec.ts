import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMonitoringElements } from './search-monitoring-elements';

describe('SearchMonitoringElements', () => {
  let component: SearchMonitoringElements;
  let fixture: ComponentFixture<SearchMonitoringElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMonitoringElements],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchMonitoringElements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
