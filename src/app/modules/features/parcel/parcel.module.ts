import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelTableComponent } from './parcel-table/parcel-table.component';
import { ParcelRoutingModule } from './parcel-routing.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { ParcelFormComponent } from './parcel-form/parcel-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParcelEditComponent } from './parcel-edit/parcel-edit.component';


@NgModule({
  declarations: [
    ParcelTableComponent,
    ParcelFormComponent,
    ParcelEditComponent
  ],
  imports: [
    CommonModule,
    ParcelRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ParcelFormComponent
  ]
})
export class ParcelModule { }
