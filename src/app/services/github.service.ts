import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(public http: HttpClient) { }
  
  ghapi = 'https://api.github.com/users/cristianjuarezz'
  
  getRepos(){
	  return this.http.get<any>(this.ghapi+'/repos');
  }
  
}
