import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsMeasurement } from './units-measurement';

describe('UnitsMeasurement', () => {
  let component: UnitsMeasurement;
  let fixture: ComponentFixture<UnitsMeasurement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitsMeasurement],
    }).compileComponents();

    fixture = TestBed.createComponent(UnitsMeasurement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
