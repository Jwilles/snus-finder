import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SnusService } from './services/snus.service';


@Component({
	selector: 'my-app',
	template: `
		<header>
			<div class="page-header">
				<h2>Where's the snus?</h2>	
			</div>
		</header>
		<div class="jumbotron" >
			<h3 class="text-center">Your closest snus retailer is: {{store.storeName}}</h3>
		</div>
		
			<sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
  				<!--<sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker> -->
				<sebm-google-map-directions [origin]="origin" [destination]="destination"></sebm-google-map-directions>
			</sebm-google-map>	
		<footer class="text-center">
			<a href={{store.storeUrl}}>
				<input type="button" class="btn btn-link" value="Open with Google Maps"/>
			</a>
		</footer>
		
	`,
	//styleUrls: ['app.component.css']
	styles: [`
		.jumbotron {box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
		.sebm-google-map-container {
  			height: 300px;
			}
	`]
})

export class AppComponent implements OnInit {
 	
	constructor(private service: SnusService) {}

	origin = {};  
	destination = {}; 
		
 	lat: number = 37.08;
  	lng: number = -95.71;	
	zoom: number = 3;
	geoLoc = {};  
	store = {
		storeName: 'Loading...'
		};
	setPosition(position){
		this.service.getSnus(position.coords).subscribe(resStore => {
				this.store = resStore;
				console.log(this.store);
				
				this.origin = { longitude: -76.51625633239746, latitude: 44.236774870223 };  // its a example aleatory position
				this.destination = resStore.storeAddress;  // its a example aleatory position
			});
		
			
		
		this.geoLoc = position.coords;
      		console.log(position.coords);
      	}


	ngOnInit(){
   		if(navigator.geolocation){
      			navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      		};

   	}		

}
