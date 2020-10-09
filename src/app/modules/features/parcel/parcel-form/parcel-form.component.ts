import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-parcel-form',
  templateUrl: './parcel-form.component.html',
  styleUrls: ['./parcel-form.component.scss']
})
export class ParcelFormComponent implements OnInit {

  parcelForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.parcelForm = this.fb.group({
      parcelID: '',
      province: '',
      countie: '',
      commune: '',
      surface: '',
      share: ''
    });
  }

  onSubmit() {
    console.log(this.parcelForm.value);
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
