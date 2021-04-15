import { Injectable } from '@angular/core';
import { LocalisationService } from './localisation.service';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OWMapService {
  latitude;
  longitude;
  apID = 'e69064d639a2a2cd2f257cb59c476c6c';
  apiUrl;
  constructor(private serviceLocalisation: LocalisationService,
              private _http: HttpClient) { }

 getWeather(){
  return this.serviceLocalisation.getCurrentPosition().then(async (data) =>{
      this.latitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
      this.apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${this.apID}&units=metric`;
      return await this._http.get<any>(this.apiUrl).toPromise();
    });
  }
}
