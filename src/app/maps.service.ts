import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// The geolink object must be in the form of :
// export const geolink = [ {name:"...", latlng:[5.23,7.22], zoom:3} ]
import { geolink } from '../assets/maps/geolink';
// The travel must be in the form of a TS file with a 'gpx' const exported
// containing the GeoJSON waypoints
import { gpx } from '../assets/maps/waypoints';


// An object containing a latlng and a zoom level for a place
export class MapPlace {
  name:string;
  latlng: Array<number>;
  zoom: number;
}

@Injectable()
export class MapsService {

  private placeToGeo:Array<MapPlace> = [];

  constructor() {
    // Create the place <-> latlong object from the JS source
    for (let p of geolink)
      this.placeToGeo.push({name:p.name, latlng:p.latlng, zoom:p.zoom});
  }

  // Return the GeoJSON object representing the travel
  travel():Observable<any> {
    return of(gpx);
  }

  // Return the geolink object, making the link between place names and GPS position
  geolink():Observable<any> {
    return of(gpx);
  }

  // Give the MapPlace for this specific place
  placeToMapPlace (place:string):Observable<MapPlace> {
    // Find the corresponding place
    let p = this.placeToGeo.find(p => p.name == place);
    if (!p)
      console.warn("Invalid place requested : " + place);
    return of(p);
  }

}
