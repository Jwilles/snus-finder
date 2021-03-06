import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SnusService {

	constructor(private http: Http) {}

	getSnus(location) {
	
		return this.http.get('/snus/' + location.latitude + '/' + location.longitude)
			.map(res => res.json())
			.catch(err => {
				return Observable.throw(err);
			});
			
	}
}
