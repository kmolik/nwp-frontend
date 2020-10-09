import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomyRoutingModule } from './economy-routing.module';
import { EconomyDashboardComponent } from './components/economy-dashboard/economy-dashboard.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [EconomyDashboardComponent],
  imports: [
    CommonModule,
    EconomyRoutingModule,
    CoreModule
  ]
})
export class EconomyModule { }
