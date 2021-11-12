import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyHostDetailsComponent } from './property-host-details.component';

describe('PropertyHostDetailsComponent', () => {
  let component: PropertyHostDetailsComponent;
  let fixture: ComponentFixture<PropertyHostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyHostDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyHostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
