import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SnusService } from './services/snus.service';


@Component({
	selector: 'my-app',
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.component.css']
})

export class AppComponent implements OnInit {
 	
	constructor(private service: SnusService) {}

	origin = { lng: 0, lat: 0 };  
	destination = ""; 
		
 	lat: number = 37.08;
  	lng: number = -95.71;	
	zoom: number = 3;

	store = { storeName: 'loading...' };

	setPosition(position){
		this.service.getSnus(position.coords).subscribe(
			resStore => {
				this.store = resStore;
				console.log(this.store);
				
				this.origin = { lng: position.coords.longitude, lat: position.coords.latitude }; 
				this.destination = resStore.storeAddress; 
			},
			err => {
				window.alert('Search failed. Please make sure you are within the United States');
				console.log(err)				
			});
		
      		console.log(position.coords);
      	}


	ngOnInit(){
   		if(navigator.geolocation){
      			navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      		};

   	}		

}
