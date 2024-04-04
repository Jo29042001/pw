import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperHomeComponent } from './shipper-home.component';

describe('ShipperHomeComponent', () => {
  let component: ShipperHomeComponent;
  let fixture: ComponentFixture<ShipperHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipperHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipperHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
