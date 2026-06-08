import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface TopPortKpi {
  port: string;
  incidents: number;
  responseHours: string;
  resolvedRate: string;
}

const TOP_PORTS: TopPortKpi[] = [
  { port: 'ميناء 1', incidents: 18, responseHours: '2.1 ساعة', resolvedRate: '94%' },
  { port: 'ميناء 2', incidents: 13, responseHours: '2.8 ساعة', resolvedRate: '89%' },
  { port: 'ميناء 3', incidents: 9, responseHours: '3.4 ساعة', resolvedRate: '83%' },
  { port: 'ميناء 4', incidents: 6, responseHours: '4.2 ساعة', resolvedRate: '79%' },
];

@Component({
  selector: 'app-kpis-reports',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './kpis-reports.html',
  styleUrl: './kpis-reports.css',
})
export class KpisReports {
  readonly topPortsColumns: string[] = ['port', 'incidents', 'responseHours', 'resolvedRate'];
  readonly topPortsDataSource = TOP_PORTS;
}
