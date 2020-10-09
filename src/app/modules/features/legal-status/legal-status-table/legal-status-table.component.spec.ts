import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalStatusTableComponent } from './legal-status-table.component';

describe('LegalStatusTableComponent', () => {
  let component: LegalStatusTableComponent;
  let fixture: ComponentFixture<LegalStatusTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalStatusTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
