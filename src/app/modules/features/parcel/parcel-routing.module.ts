import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParcelTableComponent } from './parcel-table/parcel-table.component';


const routes: Routes = [
  {path: 'parcelTable', component: ParcelTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcelRoutingModule { }

