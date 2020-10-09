import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EconomyDashboardComponent } from './components/economy-dashboard/economy-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: EconomyDashboardComponent,

    children: [

      {
        path: 'parcel',
        loadChildren: () => import('../features/parcel/parcel.module').then(m => m.ParcelModule)
      },
      {
        path: 'buildings',
        loadChildren: () => import('../features/buildings/buildings.module').then(m => m.BuildingsModule)
      },
      {
        path: 'status',
        loadChildren: () => import('../features/legal-status/legal-status.module').then(m => m.LegalStatusModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomyRoutingModule { }
