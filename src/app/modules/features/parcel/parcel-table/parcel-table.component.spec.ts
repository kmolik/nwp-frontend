import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelTableComponent } from './parcel-table.component';

describe('ParcelTableComponent', () => {
  let component: ParcelTableComponent;
  let fixture: ComponentFixture<ParcelTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcelTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
