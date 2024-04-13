import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-card',
  templateUrl: './works-card.component.html',
  styleUrls: ['./works-card.component.css']
})
export class WorksCardComponent implements OnInit {

  @Input() title:string=""
  @Input() description:string=""
  @Input() tags:string=""
  @Input() imgURL:string=""
  items:any
  constructor() { }

  ngOnInit(): void {
    this.items=this.tags.split(',')    
  }

}
