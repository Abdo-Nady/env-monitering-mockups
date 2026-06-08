import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUnitsMeasurement } from './search-units-measurement';

describe('SearchUnitsMeasurement', () => {
  let component: SearchUnitsMeasurement;
  let fixture: ComponentFixture<SearchUnitsMeasurement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchUnitsMeasurement],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchUnitsMeasurement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
