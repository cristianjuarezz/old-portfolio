import { Component, OnInit } from '@angular/core';
import { fader } from "./anims";
import { RouterOutlet } from "@angular/router";
import * as AOS from 'aos';
//import { Scrollbar } from "smooth-scrollbar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
	  fader
  ]
})
export class AppComponent implements OnInit {
  title = 'frontend';
  
  ngOnInit() {
    AOS.init({
		debounceDelay: 50,
		duration: 1000,
		mirror: true,
		once: false
	});
  }
  
  prepareRoute(outlet: RouterOutlet){
	  return outlet.activatedRouteData['depth'];
  }
  
}
