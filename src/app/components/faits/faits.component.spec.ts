import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaitsComponent } from './faits.component';

describe('FaitsComponent', () => {
  let component: FaitsComponent;
  let fixture: ComponentFixture<FaitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
