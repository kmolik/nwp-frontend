import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyDashboardComponent } from './economy-dashboard.component';

describe('EconomyDashboardComponent', () => {
  let component: EconomyDashboardComponent;
  let fixture: ComponentFixture<EconomyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
