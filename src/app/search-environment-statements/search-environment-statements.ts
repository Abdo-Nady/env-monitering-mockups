import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  position: number;

  port: string;
  reportNumber: string;
  reportDate: string;
  source: string;
  culprit: string;
  status: string;

  environmentElements: string;

  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, port: 'ميناء 1',  actions: 'edit', reportNumber: '1234567890',
     reportDate: '2026-04-17 08:00', source: 'بلاغ',status: 'جارى المتابعة',
      culprit: 'سفية CMA - رقم الرحلة رقم 1234567890', environmentElements: 'حدث : كسر برصيف رقم 1' },
  { position: 2, port: 'ميناء 2',  actions: 'edit', reportNumber: '1234567890',
     reportDate: '2026-04-17 08:00', source: 'بلاغ',status: 'مكتمل',
      culprit: 'شركة المجد للشحن والتفريغ', environmentElements: 'حدث : كسر بوابة رقم 1' },
];

interface DeviceOption {
  id: string;
  name: string;
  desc?: string;
}

interface StationOption {
  id: string;
  name: string;
  desc?: string;
}

interface PortOption {
  id: string;
  name: string;
}

interface MonitoringElementOption {
  id: string;
  name: string;
  desc?: string;
}

interface PerpetratorOption {
  id: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-search-environment-statements',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatPaginatorModule],
  templateUrl: './search-environment-statements.html',
  styleUrl: './search-environment-statements.css',
})
export class SearchEnvironmentStatements {
  displayedColumns: string[] = ['position', 'port', 'reportNumber', 'reportDate', 'environmentElements', 'source', 'culprit', 'status', 'actions'];
  dataSource = ELEMENT_DATA;
  protected portsDropdownOpen = false;
  protected selectedPort: PortOption | null = null;
  protected readonly ports: PortOption[] = [
    { id: 'P-001', name: 'ميناء 1' },
    { id: 'P-002', name: 'ميناء 2' },
    { id: 'P-003', name: 'ميناء 3' },
    { id: 'P-004', name: 'ميناء 4' },
    { id: 'P-005', name: 'ميناء 5' },
  ];
  protected elementsDropdownOpen = false;
  protected selectedElement: MonitoringElementOption | null = null;
  protected readonly elements: MonitoringElementOption[] = [
    { id: 'E-001', name: 'رياح', desc: 'm/s' },
    { id: 'E-002', name: 'مطر', desc: 'mm' },
    { id: 'E-003', name: 'غبار', desc: 'mg/m^3' },
    { id: 'E-004', name: 'CO2', desc: 'ppm' },
    { id: 'E-005', name: 'CO1', desc: 'ppm' },
    { id: 'E-006', name: 'O2', desc: 'ppm' },
    { id: 'E-007', name: 'حدث' },
  ];
  protected devicesDropdownOpen = false;
  protected selectedDevice: DeviceOption | null = null;
  protected readonly devices: DeviceOption[] = [
    { id: '1234567890', name: 'جهاز جودة الهواء', desc: 'رصيف 1 بيتا 52' },
    { id: '1234567891', name: 'جهاز درجة الحرارة', desc: 'بوابة خروج رقم 27' },
    { id: '1234567892', name: 'جهاز درجة الرطوبة', desc: 'ساحة رقم 10' },
  ];
  protected stationsDropdownOpen = false;
  protected selectedStation: StationOption | null = null;
  protected stationSearch = '';
  protected readonly stations: StationOption[] = [
    { id: 'ST-001', name: 'محطة الأرصاد الجوية', desc: 'بورسعيد' },
    { id: 'ST-002', name: 'محطة الأرصاد الجوية', desc: 'البحر الأحمر' },
    { id: 'ST-002', name: 'محطة الأرصاد الجوية', desc: 'شمال سيناء' },
  ];
  protected perpetratorsDropdownOpen = false;
  protected selectedPerpetrator: PerpetratorOption | null = null;
  protected readonly perpetrators: PerpetratorOption[] = [
    { id: 'vessel', name: 'سفينة', icon: 'directions_boat' },
    { id: 'company', name: 'شركة', icon: 'business' },
    { id: 'truck', name: 'شاحنة', icon: 'local_shipping' },
  ];

  readonly addClicked = output<void>();
  readonly searchClicked = output<void>();

  protected onAddClick(): void {
    this.addClicked.emit();
  }

  protected onSearchClick(): void {
    this.searchClicked.emit();
  }

  protected selectDevice(device: DeviceOption): void {
    this.selectedDevice = device;
  }

  protected selectPort(port: PortOption): void {
    this.selectedPort = port;
  }

  protected selectElement(element: MonitoringElementOption): void {
    this.selectedElement = element;
  }

  protected selectStation(station: StationOption): void {
    this.selectedStation = station;
  }

  protected selectPerpetrator(option: PerpetratorOption): void {
    this.selectedPerpetrator = option;
  }

  protected filteredStations(): StationOption[] {
    const query = this.stationSearch.trim().toLowerCase();
    if (!query) {
      return this.stations;
    }

    return this.stations.filter((station) =>
      station.id.toLowerCase().includes(query) ||
      station.name.toLowerCase().includes(query) ||
      (station.desc ?? '').toLowerCase().includes(query),
    );
  }

  protected trackStation(index: number, station: StationOption): string {
    return station.id;
  }
}
