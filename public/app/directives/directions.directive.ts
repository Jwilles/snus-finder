import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive,  Input} from '@angular/core';
declare var google: any;



@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin;
  @Input() destination;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}
  ngOnChanges(){

    if (this.destination != "" && this.origin) {	
    this.gmapsApi.getNativeMap().then(map => {
              var directionsService = new google.maps.DirectionsService;
              var directionsDisplay = new google.maps.DirectionsRenderer;
              directionsDisplay.setMap(map);
              directionsService.route({
                   // origin: {lat: this.origin.latitude, lng: this.origin.longitude},
		      origin: this.origin,
                   // destination: {lat: this.destination.latitude, lng: this.destination.longitude},
		      destination: this.destination,
                      waypoints: [],
                      optimizeWaypoints: true,
                      travelMode: 'WALKING'
                    }, function(response, status) {
                                if (status === 'OK') {
                                  directionsDisplay.setDirections(response);
                                } else {
                                  window.alert('Directions request failed due to ' + status);
                                }
              });

    });
   }	
  }
}
