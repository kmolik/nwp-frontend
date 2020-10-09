import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDashboardComponent } from './table-dashboard/table-dashboard.component';



const routes: Routes = [
  {path: 'tableDashboard', component: TableDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
