import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {

  showDiv:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
showDate(){
  this.showDiv=true
}
}
