import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {

  @Input() company!:string
  @Input() description!:string
  @Input() startDate!:string
  @Input() endDate!:string

  constructor() { }

  ngOnInit(): void {
  }

}
