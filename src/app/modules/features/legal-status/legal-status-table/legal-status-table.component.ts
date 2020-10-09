import {Component, OnInit, AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material';
import { LegalStatusFormComponent } from '../legal-status-form/legal-status-form.component';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions} from 'ngx-gallery-9';

@Component({
  selector: 'app-legal-status-table',
  templateUrl: './legal-status-table.component.html',
  styleUrls: ['./legal-status-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalStatusTableComponent implements OnInit, AfterViewInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Lp', 'buildingID', 'buildingType', 'buildYear', 'parcelNumber', 'Powiat', 'Gmina'];
  expandedElement: PeriodicElement | null;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/1-small.jpg',
        medium: 'assets/1-medium.jpg',
        big: 'assets/1-big.jpg'
      },
      {
        small: 'assets/2-small.jpg',
        medium: 'assets/2-medium.jpg',
        big: 'assets/2-big.jpg'
      },
      {
        small: 'assets/3-small.jpg',
        medium: 'assets/3-medium.jpg',
        big: 'assets/3-big.jpg'
      }
    ];
  }

  ngAfterViewInit() { }

  openForm(): void {
    const dialogRef = this.dialog.open(LegalStatusFormComponent, {
      width: '640px', disableClose: true
    });
  }


  closeDialog() {
    this.dialog.closeAll();
  }
}

export interface PeriodicElement {
  Lp: number;
  buildingID: string;
  buildingType: string;
  buildYear: number;
  Powiat: string;
  Gmina: string;
  parcelNumber: string;
  description: string;
  imgUrl: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Lp: 1,
    buildingID: '326101_1.0019.10_BUD',
    buildingType: 'budynek',
    buildYear: 1978,
    Powiat: 'm. Koszalin',
    Gmina:  'm. Koszalin',
    parcelNumber: '326101_1.0019.1478/3',
    imgUrl: 'assets/kos1.JPG',
    // tslint:disable-next-line: max-line-length
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum? Expedita aut eveniet sint repudiandae velit deleniti, sunt iste cumque, necessitatibus, quisquam molestias laborum rerum! Porro est suscipit esse doloribus?`
  }, {
    Lp: 2,
    buildingID: '326101_1.0019.1012_BUD',
    buildingType: 'budynek',
    buildYear: 1950,
    Powiat: 'm. Koszalin',
    Gmina:  'm. Koszalin',
    parcelNumber: '326101_1.0019.270/1',
    imgUrl: 'assets/kos2.JPG',
    // tslint:disable-next-line: max-line-length
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum? Expedita aut eveniet sint repudiandae velit deleniti, sunt iste cumque, necessitatibus, quisquam molestias laborum rerum! Porro est suscipit esse doloribus?`
  }, {
    Lp: 3,
    buildingID: '326101_1.0019.1650_BUD	',
    buildingType: 'budynek',
    buildYear: 1938,
    Powiat: 'm. Koszalin',
    Gmina:  'm. Koszalin',
    parcelNumber: '326101_1.0019.331',
    imgUrl: 'assets/kos3.JPG',
    // tslint:disable-next-line: max-line-length
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum? Expedita aut eveniet sint repudiandae velit deleniti, sunt iste cumque, necessitatibus, quisquam molestias laborum rerum! Porro est suscipit esse doloribus?`
  }, {
    Lp: 4,
    buildingID: '326101_1.0019.1651_BUD',
    buildingType: 'budynek',
    buildYear: 1977,
    Powiat: 'm. Koszalin',
    Gmina:  'm. Koszalin',
    parcelNumber: '326101_1.0019.331',
    imgUrl: '',
    // tslint:disable-next-line: max-line-length
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum? Expedita aut eveniet sint repudiandae velit deleniti, sunt iste cumque, necessitatibus, quisquam molestias laborum rerum! Porro est suscipit esse doloribus?`
  }, {
    Lp: 5,
    buildingID: '326101_1.0019.10_BUD',
    buildingType: 'budynek',
    buildYear: 1979,
    Powiat: 'm. Koszalin',
    Gmina:  'm. Koszalin',
    parcelNumber: '326101_1.0019.331',
    imgUrl: '',
    // tslint:disable-next-line: max-line-length
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum? Expedita aut eveniet sint repudiandae velit deleniti, sunt iste cumque, necessitatibus, quisquam molestias laborum rerum! Porro est suscipit esse doloribus?`
  }, {
    Lp: 6,
    buildingID: '326101_1.0019.1824_BUD',
    buildingType: 'budynek',
    buildYear: 1978,
    Powiat: 'm. Koszalin',
    Gmina:  'm. Koszalin',
    parcelNumber: '326101_1.0019.561',
    imgUrl: '',
    // tslint:disable-next-line: max-line-length
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum? Expedita aut eveniet sint repudiandae velit deleniti, sunt iste cumque, necessitatibus, quisquam molestias laborum rerum! Porro est suscipit esse doloribus?`
  }, {
    Lp: 7,
    buildingID: '326101_1.0019.1825_BUD',
    buildingType: 'budynek',
    buildYear: 1978,
    Powiat: 'm. Koszalin',
    Gmina:  'm. Koszalin',
    parcelNumber: '326101_1.0019.561',
    imgUrl: '',
    // tslint:disable-next-line: max-line-length
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum? Expedita aut eveniet sint repudiandae velit deleniti, sunt iste cumque, necessitatibus, quisquam molestias laborum rerum! Porro est suscipit esse doloribus?`
  }, {
    Lp: 8,
    buildingID: '326101_1.0019.1826_BUD',
    buildingType: 'budynek',
    buildYear: 1978,
    Powiat: 'm. Koszalin',
    Gmina:  'm. Koszalin',
    parcelNumber: '326101_1.0019.561',
    imgUrl: '',
    // tslint:disable-next-line: max-line-length
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum? Expedita aut eveniet sint repudiandae velit deleniti, sunt iste cumque, necessitatibus, quisquam molestias laborum rerum! Porro est suscipit esse doloribus?`
  }, {
    Lp: 9,
    buildingID: '326101_1.0019.1827_BUD',
    buildingType: 'budynek',
    buildYear: 1978,
    Powiat: 'm. Koszalin',
    Gmina:  'm. Koszalin',
    parcelNumber: '326101_1.0019.561',
    imgUrl: '',
    // tslint:disable-next-line: max-line-length
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum? Expedita aut eveniet sint repudiandae velit deleniti, sunt iste cumque, necessitatibus, quisquam molestias laborum rerum! Porro est suscipit esse doloribus?`
  }, {
    Lp: 10,
    buildingID: '326101_1.0019.1962_BUD',
    buildingType: 'budynek',
    buildYear: 1977,
    Powiat: 'm. Koszalin',
    Gmina:  'm. Koszalin',
    parcelNumber: '326101_1.0020.638',
    imgUrl: '',
    // tslint:disable-next-line: max-line-length
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, illum? Expedita aut eveniet sint repudiandae velit deleniti, sunt iste cumque, necessitatibus, quisquam molestias laborum rerum! Porro est suscipit esse doloribus?`
  }
];

