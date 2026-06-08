import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

export interface PeriodicElement {
  position: number;
  partNumber : string;
  deviceType : string;
  supplier : string;
  location : string;
  status : string;      
  actions: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, partNumber: '1234567890', deviceType: 'مراقبة جودة الهواء', supplier: 'مورد 1', location: 'رصيف 1 بيتا 52', status: 'نشط', actions: 'edit'},
  {position: 2, partNumber: '1234567891', deviceType: 'مراقبة درجة الحرارة', supplier: 'مورد 2', location: 'بوابة خروج رقم 27 حارة 1', status: 'نشط', actions: 'edit'},
  {position: 3, partNumber: '1234567892', deviceType: 'مراقبة درجة الرطوبة', supplier: 'مورد 3', location: 'ساحة رقم 10', status: 'غير نشط', actions: 'edit'},
  {position: 4, partNumber: '1234567893', deviceType: 'مراقبة الإشعاع', supplier: 'مورد 4', location: 'متحرك', status: 'معطل', actions: 'edit'},
  {position: 5, partNumber: '1234567894', deviceType: 'كاميرا مراقبة المرور', supplier: 'مورد 5', location: 'إحداثي [31.211003, 29.952405]', status: 'نشط', actions: 'edit'},
];

@Component({
  selector: 'app-search-devices',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  templateUrl: './search-devices.html',
  styleUrl: './search-devices.css',
})
export class SearchDevices {
  readonly displayedColumns: string[] = ['position', 'partNumber', 'deviceType', 'supplier', 'location', 'status', 'actions'];
  dataSource = ELEMENT_DATA;
  readonly deviceTypes: string[] = ['O2', 'CO2', 'CO1'];
  readonly toppings = new FormControl<string[]>([]);
  readonly toppingList: string[] = ['O2', 'CO2', 'CO1'];

  readonly addClicked = output<void>();
  readonly searchClicked = output<void>();
  
  protected onAddClick(): void {
    this.addClicked.emit();
  }

  protected onSearchClick(): void {
    this.searchClicked.emit();
  }

}

export interface SearchDeviceModel {
  name: string;
  deviceType: string;
}

export interface SearchDeviceResultModel {
  name: string;
  typesDevicesName: string;
}
