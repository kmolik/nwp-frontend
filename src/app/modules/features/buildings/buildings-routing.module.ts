import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingsTableComponent } from './buildings-table/buildings-table.component';


const routes: Routes = [
  {path: 'buildingsTable', component: BuildingsTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingsRoutingModule { }
