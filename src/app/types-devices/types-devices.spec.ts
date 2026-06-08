import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesDevices } from './types-devices';

describe('TypesDevices', () => {
  let component: TypesDevices;
  let fixture: ComponentFixture<TypesDevices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypesDevices],
    }).compileComponents();

    fixture = TestBed.createComponent(TypesDevices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
