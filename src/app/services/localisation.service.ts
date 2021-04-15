import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {

  constructor() { }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates;
  }

}
