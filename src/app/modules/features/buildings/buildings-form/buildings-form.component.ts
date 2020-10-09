import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-buildings-form',
  templateUrl: './buildings-form.component.html',
  styleUrls: ['./buildings-form.component.scss']
})
export class BuildingsFormComponent implements OnInit {

  buildingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
    this.buildingForm = this.fb.group({
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
    console.log(this.buildingForm.value);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
