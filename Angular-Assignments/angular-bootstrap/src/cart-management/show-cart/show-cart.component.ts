import { Component } from '@angular/core';
import { CartManagementComponent } from '../cart-management.component';

@Component({
  selector: 'app-show-cart',
  standalone: true,
  imports: [CartManagementComponent],
  templateUrl: './show-cart.component.html',
  styleUrl: './show-cart.component.css'
})
export class ShowCartComponent {
  carts:any[]=[
    {
      image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTSkckIuoWmxSbzSNOWT9soTVa-1_3mz-HX63aL6ggbsAWdti62Ha8Tl6Q2s64YP05QoYWfPijV2I2UOBkTefynmoNWPd3QXF6ZCqjWchmwTAB30mR_1-yx41FCwv_i82zRejAPKPBpzw&usqp=CAc",
      name:"OnePlus Open",
      brand:"OnePlus",
      price:"₹1,39,999"
    }
  ];
  AddTask(addtask: any):void{
    this.carts.push(addtask);

  }
}
