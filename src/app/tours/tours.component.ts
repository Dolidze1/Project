import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css']
})
export class ToursComponent implements OnInit {
  ToursArray: any = [
    {imageURL:"https://www.nationsonline.org/gallery/China/Shanghai-Pudong.jpg" , name : " Shanghai" , price : ' 1,200 Gel'},
    {imageURL:"https://upload.wikimedia.org/wikipedia/commons/2/20/Chongqing_World_Financial_Centre.jpg" , name : " Chongqing" , price : ' 1,000 Gel'},
    {imageURL:"https://scandinaviantraveler.com/sites/default/files/styles/facebook_share/public/beijing_topp_1140.jpg?itok=stoxyMj8" , name : " beijing" , price : ' 2,200 Gel'},
    {imageURL:"https://digital.ihg.com/is/image/ihg/holiday-inn-tianjin-6132698998-4x3" , name : " Tianjin" , price : "1,600 Gel"},
    {imageURL:"https://www.tripsavvy.com/thmb/3IKC7SCaRhdLo14KW9BfqTi_zIE=/1887x1415/smart/filters:no_upscale()/night-view-of-guangzhou-956095614-02914cb9e8324c49be6421560ba5ffed.jpg" , name : " Guangzhou" , price : ' 1,800 Gel'},




    
  ]

 

  showDiv:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 10000) + 'k';
    }

    return value;
  }
}

