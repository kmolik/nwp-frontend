import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-buildings-edit',
  templateUrl: './buildings-edit.component.html',
  styleUrls: ['./buildings-edit.component.scss']
})
export class BuildingsEditComponent implements OnInit {

  buildingEdit: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.buildingEdit = this.fb.group({
      buildingID: '',
      buildingType: '',
      buildYear: '',
      parcelNumber: '',
      province: '',
      countie: '',
      commune: ''
    });
  }

  onSubmit() {
    console.log(this.buildingEdit.value);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
