import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategoriy } from 'src/app/ViewModel/ViewModel/icategoriy';
import { OrderDetailsComponent } from '../order-details/order-details.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit,AfterViewInit {
  categoryList: ICategoriy[]=[];
  totalPrice:any=0;
  @ViewChild('ele') elem:ElementRef;
  @ViewChild(OrderDetailsComponent) childComp:OrderDetailsComponent;
  constructor() {
    this.categoryList = [
      { Id:1,Name:"Labtops"},
      { Id:2,Name:"Tablets"},
      { Id:3,Name:"Mobil"},
      { Id:4,Name:"Eric"},
      { Id:5,Name:"Mas"},
      { Id:6,Name:"Rew"},
    ];
  }
  ngAfterViewInit(): void {
    console.log(this.elem.nativeElement.value=2);
    this.elem.nativeElement.value=2;
    console.log("Child Component" + this.childComp.productId);

  }
  checkit:any;

  ngOnInit(): void {
  }

  myOut( x:any){
    console.log("Selected Value of master" +x);

  }
  updateTotalPriceInMaster(data:any){
    this.totalPrice=data;
    console.log("Data returned from master" +this.totalPrice);
  }

}
