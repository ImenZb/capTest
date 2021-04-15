import { Injectable } from '@angular/core';
import { ForecastService } from './forecast.service';
import { LocalisationService } from './localisation.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherFiveDaysService {
  constructor(private serviceLocalisation: LocalisationService,
              private serviceForecast: ForecastService) { }
  
  get(){
    return this.serviceLocalisation.getCurrentPosition().then( async (data) => {
      return await this.serviceForecast.get(data.coords.latitude,data.coords.longitude).toPromise();
    })
  }
}
