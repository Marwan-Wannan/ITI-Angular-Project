import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentProduct } from './parent-product';

describe('ParentProduct', () => {
  let component: ParentProduct;
  let fixture: ComponentFixture<ParentProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
