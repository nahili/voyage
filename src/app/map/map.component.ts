import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import { Map, Polyline } from 'leaflet';

import { MapsService, MapPlace } from '../maps.service';
import { ContextService } from '../context.service';

import { config } from '../../config';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  private map: Map;
  private polyline: Polyline;

  constructor(
    private mapService:MapsService,
    private context:ContextService
  ) { }

  ngOnInit() {
    // Create the map
    this.map = L.map('map');
    // Setup the tilelayer from the config
    //L.tileLayer(config.map.service, config.map.options).addTo(this.map); // TODO
    // Set the default view
    this.mapService.placeToMapPlace(config.map.defaultPlace).subscribe(
      place => place ? this.map.setView(place.latlng,place.zoom):null
    );
    // Show the travel
    this.mapService.travel().subscribe(travel => this.updateTravel(travel));
    // Subscribe to location change from the context
    this.context.currentPlace.subscribe(place => this.moveTo(place));
  }

  // Show or update the travel on map
  // Creates a polyline for each waypoint
  // Takes a GeoJSON object
  updateTravel(travel:any):void {
    //If not null, remove the current polyline from the map
    if (this.polyline)
      this.polyline.remove();

    // Create or reset the polyline to an empty one
    this.polyline = L.polyline([], config.map.travelOptions);

    // For each GeoJSON feature, add point on the polyline
    for (let f of travel.features)
      this.polyline.addLatLng(L.GeoJSON.coordsToLatLng(f.geometry.coordinates));

    // Add the polyline to the map
    this.polyline.addTo(this.map);
  }

  // Fly to another place
  moveTo(place:string):void {
    // Find the coordinates for it
    this.mapService.placeToMapPlace(place).subscribe(p => this.moveToMapPlace(p));
  }

  // Set the map to this specific latlng/zoom
  // If the place is null, go to the default one
  moveToMapPlace (place:MapPlace):void {
    if (!place)
      this.mapService.placeToMapPlace(config.map.defaultPlace).subscribe(
        p => p ? this.moveToMapPlace(p):null
      );
    else {
      // Fly there like a bird
      this.map.flyTo(place.latlng,place.zoom);
      console.log("Flying to " + place.name);
    }
  }
}
