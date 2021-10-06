import { Component, OnInit, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { GithubService } from "../../services/github.service";
import { InstagramService } from "../../services/instagram.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioComponent implements OnInit{
		
	items = [];
	projs = [];
	igposts = [];
	numberOfTicks = 0;

	constructor(private ghServ: GithubService, private igServ: InstagramService, private el: ElementRef, private ref: ChangeDetectorRef) {
		setInterval(() => {
			this.numberOfTicks++;
			// require view to be updated
			this.ref.markForCheck();
		}, 1000);
	}

	ngOnInit(): void {
  	  this.ghServ.getRepos().subscribe(
  		  res=>{
 			  this.projs=res;
			  let myTag = this.el.nativeElement.querySelector("#x");
			  myTag.classList.remove('f');
			  setTimeout(() => 
				{
				    myTag.classList.remove('dn');
				},
				200);
  		  },
  		  err=>{
  			  console.log('OOPS!: ' + err);			  
  		  }
  	  );
	  /*this.igServ.getMedia().subscribe(
  		  res=>{
  			  this.igposts=res.data;
  		  },
  		  err=>{
  			  console.log('OOPS!: ');
			  console.log(err);
  		  }
  	  );*/
    }
}