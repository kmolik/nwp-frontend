import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalStatusFormComponent } from './legal-status-form.component';

describe('LegalStatusFormComponent', () => {
  let component: LegalStatusFormComponent;
  let fixture: ComponentFixture<LegalStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalStatusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
