import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilDashboardComponent } from './appareil-dashboard.component';

describe('AppareilDashboardComponent', () => {
  let component: AppareilDashboardComponent;
  let fixture: ComponentFixture<AppareilDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppareilDashboardComponent]
    });
    fixture = TestBed.createComponent(AppareilDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
