import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ParcelService } from 'src/app/core/http/parcel.service';
import { MatTableDataSource } from '@angular/material/table';
import { Parcel } from 'src/app/core/models/parcel';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material';
import { ParcelFormComponent } from '../parcel-form/parcel-form.component';
import { ParcelEditComponent } from '../parcel-edit/parcel-edit.component';

@Component({
  selector: 'app-parcel-table',
  templateUrl: './parcel-table.component.html',
  styleUrls: ['./parcel-table.component.scss']
})
export class ParcelTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'parcelId', 'province', 'countie', 'commune', 'surface', 'share', 'delete', 'edit'];
  dataSource = new MatTableDataSource<Parcel>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private parcelService: ParcelService,
    public dialog: MatDialog
    ) { }

  ngOnInit() {

    this.parcelService.getParcels()
      .subscribe((data: Parcel[]) => this.dataSource.data = data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  removeAt(index: number) {
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);

    this.dataSource.data = data;
  }

  openForm(): void {
    const dialogRef = this.dialog.open(ParcelFormComponent, {
      width: '640px', disableClose: true
    });
  }

  openEdit(): void {
    const dialogRef = this.dialog.open(ParcelEditComponent, {
      width: '640px', disableClose: true
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

