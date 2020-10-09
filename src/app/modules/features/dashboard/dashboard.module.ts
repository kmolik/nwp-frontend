import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDashboardComponent } from './table-dashboard/table-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [TableDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
