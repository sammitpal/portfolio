import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';
import { Site } from 'src/app/classes/site';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  siteData: Site = new Site();

  message: Message = new Message();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

 
  submit() {
    console.log(this.message);
    this.apiService.postMessage(this.message).subscribe((data:any)=>{
      console.log(data);
    })
  }

  redirect(url:any){
    window.open(url, "_blank");
  }
}
