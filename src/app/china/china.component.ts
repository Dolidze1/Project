import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-china',
  templateUrl: './china.component.html',
  styleUrls: ['./china.component.css']
})
export class ChinaComponent implements OnInit {
  gamesArray: any = [
    {imageURL:"https://www.nationsonline.org/gallery/China/Shanghai-Pudong.jpg" , name : " Shanghai" , tours : "1,200"},
    {imageURL:"https://upload.wikimedia.org/wikipedia/commons/2/20/Chongqing_World_Financial_Centre.jpg" , name : " Chongqing" , tours : "400"},
    {imageURL:"https://scandinaviantraveler.com/sites/default/files/styles/facebook_share/public/beijing_topp_1140.jpg?itok=stoxyMj8" , name : " beijing" , tours : "1,200"},
    {imageURL:"https://digital.ihg.com/is/image/ihg/holiday-inn-tianjin-6132698998-4x3" , name : " Tianjin" , tours : "1,200"},
    {imageURL:"https://www.tripsavvy.com/thmb/3IKC7SCaRhdLo14KW9BfqTi_zIE=/1887x1415/smart/filters:no_upscale()/night-view-of-guangzhou-956095614-02914cb9e8324c49be6421560ba5ffed.jpg" , name : " Guangzhou" , tours : "1,200"},
    {imageURL:"https://upload.wikimedia.org/wikipedia/commons/e/e3/Commercial_area_of_futian_to_east2020.jpg" , name : " Shenzhen" , tours : "1,200"},
    {imageURL:"https://i0.wp.com/luxuryconversation.com/wp-content/uploads/2019/03/chengdu-luxury-kol.jpg?fit=2000%2C1125&ssl=1" , name : " Chengdu" , tours : "1,200"},
    {imageURL:"https://www.floornature.com/media/photos/1/14313/01_mad_nanjing-zendai-himalayas-center_by_creatar-images_full.jpg" , name : " Nanjing" , tours : "1,200"},
    {imageURL:"https://jingdaily.com/wp-content/uploads/2018/06/shutterstock_1018775602.jpg" , name : " Xi'an" , tours : "1,200"},
    {imageURL:"https://www.chinabusinessreview.com/wp-content/uploads/2016/10/Hangzhou.jpg" , name : " Hangzhou" , tours : "1,200"},
    {imageURL:"https://www.cosmoconsult.com/fileadmin/user_upload/Deutschland/Standorte/cosmoconsult-hong-kong.jpg" , name : " Hong Kong" , tours : "1,200"},
    {imageURL:"https://lp-cms-production.imgix.net/features/2019/01/shenyang3000-897525077777.jpg" , name : " Shenyang" , tours : "1,200"},
    {imageURL:"https://www.azamara.com/sites/default/files/heros/dalian-china-1800x1000.jpg" , name : " Dalian" , tours : "1,200"},
    {imageURL:"https://www.adventurechina.com/system/forest_page/images/files/000/000/121/cropped_medium/10breathtakingplacesinchinawhichwillabsolutelyblowyourmind1.jpg?1539349977" , name : " Kunming" , tours : "1,200"},
    {imageURL:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Ningbo_South_Business_District_24-09-2018.jpg" , name : " Ningbo" , tours : "1,200"},
    



    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
