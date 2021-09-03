import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
	
	constructor(public http: HttpClient) { }

	igapi = 'https://graph.instagram.com/v11.0/me/media';
	//IGQVJYZAXRnTFoxazhGdVVJUE1NUlhEVG04b01CNHZAsbTNRdW5Fa19zYURwLUtlMlNJOHQ2TER3SnpxVkJlYUxJVVRvcEQ2ZAzFKSG16WUFpZAERUcEVGNU9oazhsRVRNX2FQY0c0TDNzdTZADdHZAYODNlbgZDZD	
	
	getMedia(){
		const headrs = new HttpHeaders({
			'Content-Type': 'application/json',
			'access_token': 'IGQVJYZAXRnTFoxazhGdVVJUE1NUlhEVG04b01CNHZAsbTNRdW5Fa19zYURwLUtlMlNJOHQ2TER3SnpxVkJlYUxJVVRvcEQ2ZAzFKSG16WUFpZAERUcEVGNU9oazhsRVRNX2FQY0c0TDNzdTZADdHZAYODNlbgZDZD',
			'user_id': '10088167714'
		});
		const nurl = this.igapi+'?fields=id,username,timestamp,caption,media_url,media_type,thumbnail_url,permalink&limit=44&access_token=IGQVJYZAXRnTFoxazhGdVVJUE1NUlhEVG04b01CNHZAsbTNRdW5Fa19zYURwLUtlMlNJOHQ2TER3SnpxVkJlYUxJVVRvcEQ2ZAzFKSG16WUFpZAERUcEVGNU9oazhsRVRNX2FQY0c0TDNzdTZADdHZAYODNlbgZDZD';
		return this.http.get<any>(nurl);
	}
}
