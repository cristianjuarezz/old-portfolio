import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MailerService {

	mailerurl = 'https://mailersys.herokuapp.com';
	
	constructor(public http: HttpClient){}
	
	sendMessage(data){
		const headrs = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.http.post<any>(this.mailerurl+'/sendmail', data, {headers: headrs});		
	}
	
}
