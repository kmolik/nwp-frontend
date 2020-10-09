import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingsTableComponent } from './buildings-table/buildings-table.component';
import { BuildingsRoutingModule } from './buildings-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { BuildingsFormComponent } from './buildings-form/buildings-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuildingsEditComponent } from './buildings-edit/buildings-edit.component';




@NgModule({
  declarations: [
    BuildingsTableComponent,
    BuildingsFormComponent,
    BuildingsEditComponent
  ],
  imports: [
    CommonModule,
    BuildingsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    BuildingsFormComponent
  ]
})
export class BuildingsModule { }
