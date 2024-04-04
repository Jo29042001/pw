import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippersUpdateComponent } from './shippers-update.component';

describe('ShippersUpdateComponent', () => {
  let component: ShippersUpdateComponent;
  let fixture: ComponentFixture<ShippersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippersUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
