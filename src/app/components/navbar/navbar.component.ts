import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ham:boolean=false

  constructor() {
    
   }

  ngOnInit(): void {
    if(window.innerWidth===1920){
      this.ham=false
    }
    else{
      this.ham=true
    }
  }

  hamclick(){
    console.log(window.screen.width);
      if(this.ham){
        this.ham=false
      }
      else{
        this.ham=true
      }
  }

}
