import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VWLandingPageComponent } from './vwlanding-page.component';

describe('VWLandingPageComponent', () => {
  let component: VWLandingPageComponent;
  let fixture: ComponentFixture<VWLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VWLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VWLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
