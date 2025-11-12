import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observar } from './observar';

describe('Observar', () => {
  let component: Observar;
  let fixture: ComponentFixture<Observar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Observar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
