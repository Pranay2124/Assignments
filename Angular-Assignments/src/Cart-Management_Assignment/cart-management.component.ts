import { Component,EventEmitter,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsePipe2Pipe } from '../pipes/use-pipe2.pipe';
import { UsePipe3Pipe } from '../pipes/use-pipe3.pipe';

@Component({
  selector: 'app-cart-management',
  standalone: true,
  imports: [UsePipe2Pipe,FormsModule,UsePipe3Pipe],
  templateUrl: './cart-management.component.html',
  styleUrl: './cart-management.component.css'
})
export class CartManagementComponent {
  filter='';
  searchText1='';
  searchText2='';
  carts:any[]=[ 
  {
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTSkckIuoWmxSbzSNOWT9soTVa-1_3mz-HX63aL6ggbsAWdti62Ha8Tl6Q2s64YP05QoYWfPijV2I2UOBkTefynmoNWPd3QXF6ZCqjWchmwTAB30mR_1-yx41FCwv_i82zRejAPKPBpzw&usqp=CAc",
    name:"OnePlus Open",
    brand:"OnePlus",
    price:"₹1,39,999"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWaSRvfFVb6Yj4bSAxJoeA1DOE2TJNpiRsew&s",
    name:"Iphone 16",
    brand:"Apple",
    price:"₹1,20,000"
  },
  {
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSg3_vUetPjZvlJFJUTbrPndhh9mrgZAJYzyr31ImT8Uc-luKfp9P7QFCk_RIpxut89h21nHHE3QmdUBmR_Fq9m16_3ZhOX3KaUl2WhSx-gunQlog_5vTn3_A",
    name:"Samsung Galaxy S24 Ultra",
    brand:"Samsung",
    price:"₹1,29,999"
  },
  {
    image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfObcSi94mjMOvS-jKURfwpzxek-0oLJWe221us3uHhvvzrDrBXFGsp3vhbCyQiB4KRKOnSDu_yZtlJhYtMAscJe4_c_XYBBT172hHq0sR4TI2parzTzJ3gGShJt0bSCliwMwX-g&usqp=CAc",
    name:"Xiaomi Mix Fold 3",
    brand:"Xiaomi",
    price:"₹1,86,999"
  },
  {
    image:"https://static.langimg.com/photo/imgsize-806826,msid-106081547/navbharat-times.jpg",
    name:"Caviar Daytona IPhone 15",
    brand:"Apple",
    price:"₹1,57,00,000"
  },
  {
    image:"https://images-cdn.ubuy.co.in/633feec3101dc871fe3cba0a-original-oppo-find-x2-pro-12g-512gb-5g.jpg",
    name:"Oppo Find X2 Pro",
    brand:"Oppo",
    price:"₹26,07,483"
  },
  ];
  OnSort1(){
    this.carts.sort((a,b)=>{
      var n1=a.name.toLowerCase();
      var n2=b.name.toLowerCase();
      if(n1<n2)
       return -1
      else if(n1>n2)
       return 1
      else
       return 0
  }); 
  }
  OnSort2():void{
    this.carts.sort((a,b)=>{
      var n1=a.price.toLowerCase();
      var n2=b.price.toLowerCase();
      if(n1<n2)
       return -1
      else if(n1>n2)
       return 1
      else
       return 0
  }); 
  }
  Search1(){
    this.filter=this.searchText2;
  }
  Search2(){
    this.filter=this.searchText1;
  }
  @Output() add = new EventEmitter;
  arr:any={image:"",
    name:"",
    brand:"",
    price:""} 
  AddTask(arr:any):void{
    this.add.emit(arr);
    this.arr={};
  }
}
