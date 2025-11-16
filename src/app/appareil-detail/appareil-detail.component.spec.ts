import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilDetailComponent } from './appareil-detail.component';

describe('AppareilDetailComponent', () => {
  let component: AppareilDetailComponent;
  let fixture: ComponentFixture<AppareilDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppareilDetailComponent]
    });
    fixture = TestBed.createComponent(AppareilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
