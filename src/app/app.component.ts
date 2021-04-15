import { Component, OnInit } from '@angular/core';
import { CameraService } from './services/camera.service';
import { OWMapService } from './services/owmap.service';
import { WeatherFiveDaysService } from './services/weather-five-days.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Meteo';
  currentWeather;
  forecast;
  image;
  constructor(private serviceOwmap: OWMapService,
              private serviceWeatherFiveDays: WeatherFiveDaysService){

  }
 
  async ngOnInit(){
    this.currentWeather = await this.serviceOwmap.getWeather();
    this.forecast = await this.serviceWeatherFiveDays.get();
  }

}
