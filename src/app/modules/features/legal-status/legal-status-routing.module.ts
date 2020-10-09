import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalStatusTableComponent } from './legal-status-table/legal-status-table.component';


const routes: Routes = [
  {path: 'legalStatusTable', component: LegalStatusTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalStatusRoutingModule { }
