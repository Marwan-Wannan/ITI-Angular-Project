/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CategoryService } from './categoryservice.service';

describe('Service: Categoryservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryService]
    });
  });

  it('should ...', inject([CategoryService], (service: CategoryService) => {
    expect(service).toBeTruthy();
  }));
});
