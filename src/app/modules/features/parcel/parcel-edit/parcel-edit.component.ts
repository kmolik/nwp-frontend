import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-parcel-edit',
  templateUrl: './parcel-edit.component.html',
  styleUrls: ['./parcel-edit.component.scss']
})
export class ParcelEditComponent implements OnInit {

  parcelEdit: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.parcelEdit = this.fb.group({
      parcelID: '',
      province: '',
      countie: '',
      commune: '',
      surface: '',
      share: ''
    });
  }

  onSubmit() {
    console.log(this.parcelEdit.value);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
