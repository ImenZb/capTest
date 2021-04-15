import { TestBed } from '@angular/core/testing';

import { WeatherFiveDaysService } from './weather-five-days.service';

describe('WeatherFiveDaysService', () => {
  let service: WeatherFiveDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherFiveDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
