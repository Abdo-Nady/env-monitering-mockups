import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTypesDevices } from './search-types-devices';

describe('SearchTypesDevices', () => {
  let component: SearchTypesDevices;
  let fixture: ComponentFixture<SearchTypesDevices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchTypesDevices],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTypesDevices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
