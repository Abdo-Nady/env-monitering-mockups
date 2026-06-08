import { Routes } from '@angular/router';
import { SearchUnitsMeasurement } from './search-units-measurement/search-units-measurement';
import { SearchMonitoringElements } from './search-monitoring-elements/search-monitoring-elements';
import { SearchTypesDevices } from './search-types-devices/search-types-devices';

export const routes: Routes = [
  { path: 'search-units-measurement', component:  SearchUnitsMeasurement },
  { path: 'search-monitoring-elements', component:  SearchMonitoringElements },
  { path: 'search-types-devices', component:  SearchTypesDevices }
];
