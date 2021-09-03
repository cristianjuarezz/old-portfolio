import { Component, OnInit } from '@angular/core';
import { GithubService } from "../../services/github.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	
	items = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
	projs = [];
  
  constructor(private ghServ: GithubService) { }

  ngOnInit(): void {
	  this.ghServ.getRepos().subscribe(
		  res=>{
			  this.projs=res;
		  },
		  err=>{
			  console.log('OOPS!: ' + err);			  
		  }
	  );
  }

}
