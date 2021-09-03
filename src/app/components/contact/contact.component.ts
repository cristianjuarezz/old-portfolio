import { Component, OnInit } from '@angular/core';
import { MailerService } from "../../services/mailer.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  constructor(private mailerServ: MailerService) { }

  missing = false;
  state = 0;

  ngOnInit(): void {
	  
  }
  
  sendMail(d){
	this.state=0;
	if(!d.value.name || !d.value.email || !d.value.subject || !d.value.message){
		this.missing = true;
		return;
	}
	d = JSON.stringify(d.value);
	this.state = 1;
  	this.mailerServ.sendMessage(d).subscribe(
		res=>{
			this.state = 2;
		},
		err=>{
			this.state=-1;
			console.log(err);
		}
	);
  }
  
}