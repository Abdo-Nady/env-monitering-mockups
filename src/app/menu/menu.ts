import { Component, output, signal } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MonitoringElements } from '../monitoring-elements/monitoring-elements';
import { SearchMonitoringElements } from '../search-monitoring-elements/search-monitoring-elements';
import { SearchDevices } from '../search-devices/search-devices';
import { SearchManufacturers } from '../search-manufacturers/search-manufacturers';
import { SearchApprovalPolicy } from '../search-approval-policy/search-approval-policy';
import { SearchMonitoringStations } from '../search-monitoring-stations/search-monitoring-stations';
import { SearchMonitoringFollowup } from '../search-monitoring-followup/search-monitoring-followup';
import { SearchEnvironmentStatements } from '../search-environment-statements/search-environment-statements';
import { SearchEnvironmentalRecord } from '../search-environmental-record/search-environmental-record';
import { SearchReqIssuingSafeDisposalCert } from '../search-req-issuing-safe-disposal-cert/search-req-issuing-safe-disposal-cert';
import { SearchFollowImplWaste } from '../search-follow-impl-waste/search-follow-impl-waste';
import { SearchRecordStartEndWork } from '../search-record-start-end-work/search-record-start-end-work';
import { KpisReports } from '../kpis-reports/kpis-reports';
import { SearchReqRestoreThingOriginal } from '../search-req-restore-thing-original/search-req-restore-thing-original';
import { SearchTypesWastes } from '../search-types-wastes/search-types-wastes';
import { SearchWasteCollectReq } from '../search-waste-collect-req/search-waste-collect-req';
import { SearchMonitoringOperations } from '../search-monitoring-operations/search-monitoring-operations';
import { SearchOwners } from '../search-owners/search-owners';
import { SearchOperatingCompanies } from '../search-operating-companies/search-operating-companies';
import { SearchCommittees } from '../search-committees/search-committees';
import { SearchReviewers } from '../search-reviewers/search-reviewers';
import { SearchSuppliers } from '../search-suppliers/search-suppliers';
import { SearchUnitsMeasurement } from '../search-units-measurement/search-units-measurement';
import { Manufacturers } from '../manufacturers/manufacturers';
import { ApprovalPolicy } from '../approval-policy/approval-policy';
import { MonitoringStations } from '../monitoring-stations/monitoring-stations';
import { MonitoringFollowup } from '../monitoring-followup/monitoring-followup';
import { CreateStatement } from '../create-statement/create-statement';
import { EnvironmentStatements } from '../environment-statements/environment-statements';
import { ReqIssuingSafeDisposalCert } from '../req-issuing-safe-disposal-cert/req-issuing-safe-disposal-cert';
import { FollowImplWaste } from '../follow-impl-waste/follow-impl-waste';
import { RecordStartEndWork } from '../record-start-end-work/record-start-end-work';
import { ReqRestoreThingOriginal } from '../req-restore-thing-original/req-restore-thing-original';
import { TypesWastes } from '../types-wastes/types-wastes';
import { WasteCollectReq } from '../waste-collect-req/waste-collect-req';
import { ReviewWasteCollectReq } from '../review-waste-collect-req/review-waste-collect-req';
import { MonitoringOperations } from '../monitoring-operations/monitoring-operations';
import { Owners } from '../owners/owners';
import { OperatingCompanies } from '../operating-companies/operating-companies';
import { Committees } from '../committees/committees';
import { Reviewers } from '../reviewers/reviewers';
import { Suppliers } from '../suppliers/suppliers';
import { UnitsMeasurement } from '../units-measurement/units-measurement';
import { SearchTypesDevices } from '../search-types-devices/search-types-devices';
import { TypesDevices } from '../types-devices/types-devices';
import { Devices } from '../devices/devices';

/** Second-level entry shown under each system. */
export interface MenuScreen {
  id: string;
  label: string;
  icon: string;
}

/** Top-level system grouping with nested screens. */
export interface MenuSystem {
  id: string;
  name: string;
  icon: string;
  screens: MenuScreen[];
}

type DetailPanel =
  | 'units-measurement'
  | 'monitoring-elements'
  | 'search-units-measurement'
  | 'search-monitoring-elements'
  | 'search-types-devices'
  | 'types-devices'
  | 'search-devices'
  | 'devices'
  | 'search-monitoring-stations'
  | 'monitoring-stations'
  | 'search-monitoring-operations'
  | 'monitoring-operations'
  | 'search-typesWastes'
  | 'typesWastes'
  | 'search-followImplWaste'
  | 'search-record-start-end-work'
  | 'followImplWaste'
  | 'record-start-end-work'
  | 'search-reqIssuingSafeDisposalCert'
  | 'reqIssuingSafeDisposalCert'
  | 'search-reqRestoreThingOriginal'
  | 'reqRestoreThingOriginal'
  | 'search-environment-statements'
  | 'search-environmentalRecord'
  | 'kpis-reports'
  | 'search-wasteCollectReq'
  | 'environment-statements'
  | 'wasteCollectReq'
  | 'review-waste-collect-req'
  | 'create-statement'
  | 'search-monitoring-followup'
  | 'monitoring-followup'
  | 'search-reviewers'
  | 'reviewers'
  | 'search-committees'
  | 'committees'
  | 'search-owners'
  | 'search-operating-companies'
  | 'owners'
  | 'operating-companies'
  | 'search-manufacturers'
  | 'search-approval-policy'
  | 'manufacturers'
  | 'approval-policy'
  | 'search-suppliers'
  | 'suppliers';

@Component({
  selector: 'app-menu',
  imports: [
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    SearchMonitoringElements,
    SearchDevices,
    SearchManufacturers,
    SearchApprovalPolicy,
    SearchMonitoringStations,
    SearchMonitoringFollowup,
    SearchEnvironmentStatements,
    SearchEnvironmentalRecord,
    SearchReqIssuingSafeDisposalCert,
    SearchFollowImplWaste,
    SearchRecordStartEndWork,
    KpisReports,
    SearchReqRestoreThingOriginal,
    SearchTypesWastes,
    SearchWasteCollectReq,
    SearchMonitoringOperations,
    SearchCommittees,
    SearchReviewers,
    SearchOwners,
    SearchOperatingCompanies,
    SearchSuppliers,
    MonitoringElements,
    SearchUnitsMeasurement,
    Manufacturers,
    ApprovalPolicy,
    MonitoringStations,
    MonitoringFollowup,
    CreateStatement,
    EnvironmentStatements,
    ReqIssuingSafeDisposalCert,
    FollowImplWaste,
    RecordStartEndWork,
    ReqRestoreThingOriginal,
    TypesWastes,
    WasteCollectReq,
    ReviewWasteCollectReq,
    MonitoringOperations,
    Committees,
    Reviewers,
    Owners,
    OperatingCompanies,
    Suppliers,
    UnitsMeasurement,
    SearchTypesDevices,
    TypesDevices,
    Devices,
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  /** Emitted when the user picks a screen (wire to routing or state). */
  readonly screenSelected = output<{ systemId: string; screenId: string }>();

  /** Detail panel target displayed in the left panel. */
  readonly activeDetail = signal<DetailPanel | null>(null);

  /** Highlights the active screen row. */
  readonly selectedScreen = signal<{ systemId: string; screenId: string } | null>(null);

  /** Sample hierarchy: Systems → Screens (replace or load from a service). */
  readonly systems: MenuSystem[] = [
    {
      id: 'kpis-reports',
      name: 'متابعة الأعمال',
        icon: 'show_chart',
      screens: [
        { id: 'kpis-reports', label: 'لوحة المؤشرات', icon: 'analytics' },
      ],
    },
    {
      id: 'settings',
      name: 'الإعدادات',
        icon: 'settings',
      screens: [
        { id: 'search-approval-policy', label: 'سياسات إعتماد الطلبات', icon: 'gavel' },
      ],
    },
    {
      id: 'master-data',
      name: 'البيانات الأساسية',
      icon: 'storage',
      screens: [
        { id: 'search-reviewers', label: 'المراجع', icon: 'rate_review' },
        { id: 'search-committees', label: 'اللجان', icon: 'groups' },
        { id: 'search-monitoring-elements', label: 'عناصر المراقبة', icon: 'sensors' },
        { id: 'search-types-devices', label: 'أنواع الأجهزة', icon: 'show_chart' },
        { id: 'search-suppliers', label: 'الموردين', icon: 'store' },
        { id: 'search-manufacturers', label: 'المصانع', icon: 'factory' },
        { id: 'search-owners', label: 'الشركات/الجهات المالكة', icon: 'apartment' },
        { id: 'search-typesWastes', label: 'أنواع النفايات', icon: 'delete_sweep' },
        { id: 'search-operating-companies', label: 'الشركات العاملة', icon: 'business_center' },
        { id: 'search-monitoring-stations', label: 'محطات الرصد', icon: 'radar' },
        { id: 'search-devices', label: 'الأجهزة', icon: 'devices' },
      ],
    },
    {
      id: 'transactions',
      name: 'عمليات المتابعة والرصد',
      icon: 'monitor',
      screens: [
        { id: 'search-monitoring-operations', label: 'تسجيل المراقبة', icon: 'assignment' },
        { id: 'search-monitoring-followup', label: 'متابعة المراقبة', icon: 'fact_check' },
        { id: 'search-environment-statements', label: 'متابعة المحاضر', icon: 'description' },
        { id: 'search-environmentalRecord', label: 'السجل البيئي', icon: 'menu_book' },
        { id: 'search-record-start-end-work', label: 'تسجيل بداية ونهاية جمع النفايات', icon: 'event_note' },
      ],
    },
    {
      id: 'demands',
      name: 'الطلبات',
      icon: 'request_page',
      screens: [
        { id: 'search-wasteCollectReq', label: 'طلبات جمع النفايات', icon: 'delete_sweep' },
        { id: 'search-reqRestoreThingOriginal', label: 'طلبات إعادة الشئ لأصله', icon: 'restore_page' },
        { id: 'search-reqIssuingSafeDisposalCert', label: 'طلبات إصدار شهادة التخلص الآمن', icon: 'verified_user' },
      ],
    },
    {
      id: 'followup-demands',
      name: 'مراجعة ومتابعة الطلبات',
      icon: 'fact_check',
      screens: [
        { id: 'search-followImplWaste', label: 'متابعة تنفيذ عمليات رفع النفايات', icon: 'speed' },
      ],
    },
  ];

  protected selectScreen(systemId: string, screenId: string): void {
    this.selectedScreen.set({ systemId, screenId });

    if (screenId === 'search-units-measurement'
    ) {
      this.activeDetail.set('search-units-measurement');
    } else if (screenId === 'search-monitoring-elements') {
      this.activeDetail.set('search-monitoring-elements');
    }else if (screenId === 'search-types-devices') {
      this.activeDetail.set('search-types-devices');
    } else if (screenId === 'search-devices') {
      this.activeDetail.set('search-devices');
    } else if (screenId === 'search-monitoring-stations') {
      this.activeDetail.set('search-monitoring-stations');
    } else if (screenId === 'search-monitoring-operations') {
      this.activeDetail.set('search-monitoring-operations');
    } else if (screenId === 'search-typesWastes') {
      this.activeDetail.set('search-typesWastes');
    } else if (screenId === 'search-monitoring-followup') {
      this.activeDetail.set('search-monitoring-followup');
    } else if (screenId === 'search-environment-statements') {
      this.activeDetail.set('search-environment-statements');
    } else if (screenId === 'search-environmentalRecord') {
      this.activeDetail.set('search-environmentalRecord');
    } else if (screenId === 'kpis-reports') {
      this.activeDetail.set('kpis-reports');
    } else if (screenId === 'search-followImplWaste') {
      this.activeDetail.set('search-followImplWaste');
    } else if (screenId === 'search-record-start-end-work') {
      this.activeDetail.set('search-record-start-end-work');
    } else if (screenId === 'search-reqIssuingSafeDisposalCert') {
      this.activeDetail.set('search-reqIssuingSafeDisposalCert');
    } else if (screenId === 'search-reqRestoreThingOriginal') {
      this.activeDetail.set('search-reqRestoreThingOriginal');
    } else if (screenId === 'search-wasteCollectReq') {
      this.activeDetail.set('search-wasteCollectReq');
    } else if (screenId === 'search-committees') {
      this.activeDetail.set('search-committees');
    } else if (screenId === 'search-reviewers') {
      this.activeDetail.set('search-reviewers');
    } else if (screenId === 'search-owners') {
      this.activeDetail.set('search-owners');
    } else if (screenId === 'search-operating-companies') {
      this.activeDetail.set('search-operating-companies');
    } else if (screenId === 'search-manufacturers') {
      this.activeDetail.set('search-manufacturers');
    } else if (screenId === 'search-approval-policy') {
      this.activeDetail.set('search-approval-policy');
    } else if (screenId === 'search-suppliers') {
      this.activeDetail.set('search-suppliers');
    }
    this.screenSelected.emit({ systemId, screenId });
  }


  protected openSearchTypesDevicesFromSearch(): void {
    this.activeDetail.set('search-types-devices');
  }
  protected openTypesDevicesFromSearch(): void {
    this.activeDetail.set('types-devices');
  }

  protected openSearchTypesDevicesFromTypes(): void {
    this.activeDetail.set('search-types-devices');
  }

  protected openDevicesFromSuppliersSearch(): void {
    this.activeDetail.set('suppliers');
  }

  protected openSearchSuppliersFromDevices(): void {
    this.activeDetail.set('search-suppliers');
  }

  protected openSearchSuppliersFromSuppliers(): void {
    this.activeDetail.set('search-suppliers');
  }

  protected openDevicesFromDevicesSearch(): void {
    this.activeDetail.set('devices');
  }

  protected openSearchDevicesFromDevices(): void {
    this.activeDetail.set('search-devices');
  }

  protected openManufacturersFromSearchManufacturers(): void {
    this.activeDetail.set('manufacturers');
  }

  protected openSearchManufacturersFromManufacturers(): void {
    this.activeDetail.set('search-manufacturers');
  }

  protected openApprovalPolicyFromSearchApprovalPolicy(): void {
    this.activeDetail.set('approval-policy');
  }

  protected openSearchApprovalPolicyFromApprovalPolicy(): void {
    this.activeDetail.set('search-approval-policy');
  }

  protected openOwnersFromSearchOwners(): void {
    this.activeDetail.set('owners');
  }

  protected openSearchOwnersFromOwners(): void {
    this.activeDetail.set('search-owners');
  }

  protected openOperatingCompaniesFromSearchOperatingCompanies(): void {
    this.activeDetail.set('operating-companies');
  }

  protected openSearchOperatingCompaniesFromOperatingCompanies(): void {
    this.activeDetail.set('search-operating-companies');
  }

  protected openMonitoringStationsFromSearch(): void {
    this.activeDetail.set('monitoring-stations');
  }

  protected openSearchMonitoringStationsFromMonitoring(): void {
    this.activeDetail.set('search-monitoring-stations');
  }

  protected openMonitoringOperationsFromSearch(): void {
    this.activeDetail.set('monitoring-operations');
  }

  protected openSearchMonitoringOperationsFromMonitoring(): void {
    this.activeDetail.set('search-monitoring-operations');
  }

  protected openTypesWastesFromSearch(): void {
    this.activeDetail.set('typesWastes');
  }

  protected openSearchTypesWastesFromTypesWastes(): void {
    this.activeDetail.set('search-typesWastes');
  }

  protected openMonitoringFollowupFromSearch(): void {
    this.activeDetail.set('monitoring-followup');
  }

  protected openSearchMonitoringFollowupFromFollowup(): void {
    this.activeDetail.set('search-monitoring-followup');
  }

  protected openEnvironmentStatementsFromSearch(): void {
    this.activeDetail.set('environment-statements');
  }

  protected openCreateStatementFromSearchEnvironmentStatements(): void {
    this.activeDetail.set('create-statement');
  }

  protected openSearchEnvironmentStatementsFromStatements(): void {
    this.activeDetail.set('search-environment-statements');
  }

  protected openFollowImplWasteFromSearch(): void {
    this.activeDetail.set('followImplWaste');
  }

  protected openSearchFollowImplWasteFromFollowImplWaste(): void {
    this.activeDetail.set('search-followImplWaste');
  }

  protected openRecordStartEndWorkFromSearch(): void {
    this.activeDetail.set('record-start-end-work');
  }

  protected openSearchRecordStartEndWorkFromRecordStartEndWork(): void {
    this.activeDetail.set('search-record-start-end-work');
  }

  protected openReqIssuingSafeDisposalCertFromSearch(): void {
    this.activeDetail.set('reqIssuingSafeDisposalCert');
  }

  protected openSearchReqIssuingSafeDisposalCertFromReqIssuingSafeDisposalCert(): void {
    this.activeDetail.set('search-reqIssuingSafeDisposalCert');
  }

  protected openReqRestoreThingOriginalFromSearch(): void {
    this.activeDetail.set('reqRestoreThingOriginal');
  }

  protected openSearchReqRestoreThingOriginalFromReqRestoreThingOriginal(): void {
    this.activeDetail.set('search-reqRestoreThingOriginal');
  }

  protected openWasteCollectReqFromSearch(): void {
    this.activeDetail.set('wasteCollectReq');
  }

  protected openSearchWasteCollectReqFromWasteCollectReq(): void {
    this.activeDetail.set('search-wasteCollectReq');
  }

  protected openReviewWasteCollectReqFromSearch(): void {
    this.activeDetail.set('review-waste-collect-req');
  }

  protected openEnvironmentStatementsFromCreateStatement(): void {
    this.activeDetail.set('environment-statements');
  }

  protected openCreateStatementFromMonitoringFollowup(): void {
    this.activeDetail.set('create-statement');
  }

  protected openReviewersFromSearchReviewers(): void {
    this.activeDetail.set('reviewers');
  }

  protected openSearchReviewersFromReviewers(): void {
    this.activeDetail.set('search-reviewers');
  }

  protected openCommitteesFromSearchCommittees(): void {
    this.activeDetail.set('committees');
  }

  protected openSearchCommitteesFromCommittees(): void {
    this.activeDetail.set('search-committees');
  }

  protected openUnitsMeasurementFromSearch(): void {
    this.activeDetail.set('units-measurement');
  }

  protected openSearchUnitsMeasurementFromSearch(): void {
    this.activeDetail.set('search-units-measurement');
  }

  protected openSearchUnitsMeasurementFromUnits(): void {
    this.activeDetail.set('search-units-measurement');
  }

  protected openMonitoringElementsFromSearch(): void {
    this.activeDetail.set('monitoring-elements');
  }

  protected openSearchMonitoringElementsFromMonitoring(): void {
    this.activeDetail.set('search-monitoring-elements');
  }


  protected isScreenActive(systemId: string, screenId: string): boolean {
    const s = this.selectedScreen();
    return s !== null && s.systemId === systemId && s.screenId === screenId;
  }
}
