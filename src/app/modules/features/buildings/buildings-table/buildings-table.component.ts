import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BuildingsService } from 'src/app/core/http/buildings.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Buildings } from 'src/app/core/models/buildings';
import { MatDialog } from '@angular/material';
import { BuildingsFormComponent } from '../buildings-form/buildings-form.component';
import { BuildingsEditComponent } from '../buildings-edit/buildings-edit.component';

@Component({
  selector: 'app-buildings-table',
  templateUrl: './buildings-table.component.html',
  styleUrls: ['./buildings-table.component.scss']
})
export class BuildingsTableComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line: max-line-length
  displayedColumns: string[] = ['id', 'buildingID', 'buildingType', 'buildYear', 'parcelNumber', 'province', 'countie', 'commune', 'delete', 'edit'];
  dataSource = new MatTableDataSource<Buildings>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private buildingsService: BuildingsService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.buildingsService.getBuildings()
      .subscribe((data: Buildings[]) => this.dataSource.data = data);
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
    const dialogRef = this.dialog.open(BuildingsFormComponent, {
      width: '640px', disableClose: true
    });
  }

  openEdit(): void {
    const dialogRef = this.dialog.open(BuildingsEditComponent, {
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


