import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DirectionsMapDirective } from './directives/directions.directive';


import { AgmCoreModule } from 'angular2-google-maps/core/core-module';
import { SnusService}  from './services/snus.service';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@NgModule({
	imports: [ 
	BrowserModule,
	HttpModule,
	AgmCoreModule.forRoot({
			apiKey: 'AIzaSyD7dR3nH2OZBdFrwmU6AFLQCGttEwhaxjY' 
		})
	 ],
	declarations: [ 
	AppComponent,
	DirectionsMapDirective 
	],
	providers: [
	SnusService
	],
	bootstrap: [ AppComponent ]
})

export class AppModule {}
