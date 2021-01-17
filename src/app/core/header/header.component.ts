import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapse: boolean=false;
  toggle: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  onResize(){
    console.log(window.innerWidth);
  
    if (window.innerWidth<664) {
      this.collapse= true;
    }
    else {
      this.collapse= false
    }
  }
  mainToggle(){
    this.toggle=this.toggle=true;
  }
}
  

  

