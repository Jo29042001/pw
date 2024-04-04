import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperHeaderComponent } from './shipper-header.component';

describe('ShipperHeaderComponent', () => {
  let component: ShipperHeaderComponent;
  let fixture: ComponentFixture<ShipperHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipperHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
