import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  apiID = 'e69064d639a2a2cd2f257cb59c476c6c';
  apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
  constructor(private _http:HttpClient) { }

  get(lat,lon){
    return this._http.get<any>(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.apiID}&units=metric`);
  }
}
