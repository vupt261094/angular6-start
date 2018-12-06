import { TestBed, inject } from '@angular/core/testing';

import { CardChartService } from './card-chart.service';

describe('CardChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardChartService]
    });
  });

  it('should be created', inject([CardChartService], (service: CardChartService) => {
    expect(service).toBeTruthy();
  }));
});
