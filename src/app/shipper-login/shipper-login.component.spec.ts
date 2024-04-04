import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperLoginComponent } from './shipper-login.component';

describe('ShipperLoginComponent', () => {
  let component: ShipperLoginComponent;
  let fixture: ComponentFixture<ShipperLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipperLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipperLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
