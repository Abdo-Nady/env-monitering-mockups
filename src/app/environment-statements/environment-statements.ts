import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

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

@Component({
  selector: 'app-environment-statements',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatRadioModule, MatSelectModule],
  templateUrl: './environment-statements.html',
  styleUrl: './environment-statements.css',
})
export class EnvironmentStatements {
  sourceValue: 'device' | 'station' | 'report' = 'report';

  readonly saveClicked = output<void>();
  readonly cancelClicked = output<void>();
  selectedType: 'device' | 'station' | 'report' = 'report';
  readonly toppings = new FormControl<string[]>([]);
  readonly toppingList: string[] = ['O2', 'CO2', 'CO1'];
  protected devicesDropdownOpen = false;
  protected selectedDevice: DeviceOption | null = null;
  protected readonly devices: DeviceOption[] = [
    { id: '1234567890', name: 'جهاز جودة الهواء', desc: 'رصيف 1 بيتا 52' },
    { id: '1234567891', name: 'جهاز درجة الحرارة', desc: 'بوابة خروج رقم 27' },
    { id: '1234567892', name: 'جهاز درجة الرطوبة', desc: 'ساحة رقم 10' },
  ];
  protected stationsDropdownOpen = false;
  protected selectedStation: StationOption | null = null;
  protected readonly stations: StationOption[] = [
    { id: 'ST-001', name: 'محطة الأرصد الجوية', desc: 'بورسعيد' },
    { id: 'ST-002', name: 'محطة الأرصد الجوية', desc: 'البحر الأحمر' },
    { id: 'ST-003', name: 'محطة الأرصد الجوية', desc: 'شمال سيناء' },
  ];

  protected onTypeChange(event: MatRadioChange): void {
    this.selectedType = event.value as 'device' | 'station' | 'report';
    this.sourceValue = this.selectedType;
  }

  protected onSaveClick(): void {
    this.saveClicked.emit();
  }

  protected onCancelClick(): void {
    this.cancelClicked.emit();
  }

  protected selectDevice(device: DeviceOption): void {
    this.selectedDevice = device;
  }

  protected selectStation(station: StationOption): void {
    this.selectedStation = station;
  }
}
