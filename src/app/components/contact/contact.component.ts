import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/classes/site';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  recaptcha: any;
  siteData: Site = new Site();
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  resolved(captchaResponse: string) {
    this.recaptcha = captchaResponse;
  }
  submit() {
    if (this.recaptcha.length > 0) {
    }
  }

  redirect(url:any){
    window.open(url, "_blank");
  }
}
