import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBelowComponent } from './panel-below.component';

describe('PanelBelowComponent', () => {
  let component: PanelBelowComponent;
  let fixture: ComponentFixture<PanelBelowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelBelowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBelowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
