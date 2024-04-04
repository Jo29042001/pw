import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersUpdateComponent } from './sellers-update.component';

describe('SellersUpdateComponent', () => {
  let component: SellersUpdateComponent;
  let fixture: ComponentFixture<SellersUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellersUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
