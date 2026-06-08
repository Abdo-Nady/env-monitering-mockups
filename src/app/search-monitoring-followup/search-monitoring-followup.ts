import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  port: string;
  dateTime: string;
  source: string;
  position: number;
  moniteringElements: string;
  measurementRate: string;
  followupStatus: string;
  culprit: string;
  actions: string;
  IntegrationMechanism: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, port: 'ميناء 1', dateTime: '2026-04-17 08:00',
     source: 'جهاز جودة الهواء - رصيف 1 بيتا 52', moniteringElements: 'رياح - m/s',
      measurementRate: 'معدل الأمن', followupStatus: 'قيد المتابعة', culprit: 'سفية CMA - رقم الرحلة رقم 1234567890',
       actions: 'edit', IntegrationMechanism: '100' },
  { position: 2, port: 'ميناء 2', dateTime: '2026-04-17 09:00',
     source: 'محطة الأرصاد الجوية - بورسعيد', moniteringElements: 'CO2 - ppm',
      measurementRate: 'معدل التحذير', followupStatus: 'جديد', culprit: 'شركة المجد للشحن والتفريغ',
       actions: 'edit', IntegrationMechanism: '200' },
  { position: 3, port: 'ميناء 3', dateTime: '2026-04-17 10:00',
     source: 'بلاغ', moniteringElements: 'غبار - mg/m^3',
      measurementRate: 'معدل الخطر', followupStatus: 'مكتمل', culprit: '',
       actions: 'edit', IntegrationMechanism: '300' },
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

interface FollowupStatusOption {
  id: string;
  name: string;
}

@Component({
  selector: 'app-search-monitoring-followup',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTableModule, MatPaginatorModule],
  templateUrl: './search-monitoring-followup.html',
  styleUrl: './search-monitoring-followup.css',
})
export class SearchMonitoringFollowup {
  displayedColumns: string[] = ['position', 'port', 'dateTime', 'source', 'moniteringElements', 'IntegrationMechanism', 'measurementRate', 'followupStatus', 'culprit', 'actions'];
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
  protected followupStatusDropdownOpen = false;
  protected selectedFollowupStatus: FollowupStatusOption | null = null;
  protected readonly followupStatuses: FollowupStatusOption[] = [
    { id: 'FS-001', name: 'جديد' },
    { id: 'FS-002', name: 'قيد المتابعة' },
    { id: 'FS-003', name: 'مكتمل' },
    { id: 'FS-004', name: 'ملغى' },
  ];

  readonly addClicked = output<void>();
  readonly searchClicked = output<void>();
  readonly followClicked = output<void>();

  protected onAddClick(): void {
    this.addClicked.emit();
  }

  protected onSearchClick(): void {
    this.searchClicked.emit();
  }

  protected onFollowClick(): void {
    this.followClicked.emit();
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

  protected selectFollowupStatus(status: FollowupStatusOption): void {
    this.selectedFollowupStatus = status;
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
