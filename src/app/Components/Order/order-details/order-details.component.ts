import { IProduct } from '../../../../../Angular_RH_1-main/Angular_RH_1-main/src/app/ViewModel/ViewModel/iproduct';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit, OnChanges {
  @Input() productId: any;
  @Output() totalPriceChanged:EventEmitter<number>;
  productList: IProduct[] ;
  totalPriceDetails:number=0;
  constructor() {

    this.totalPriceChanged=new EventEmitter<number>();
    this.productList = [
      { Id: 1, Name: "Prod1", Price: 1000, Quantity: 22, CategoryId: 1 },
      { Id: 2, Name: "Prod4", Price: 1000, Quantity: 2, CategoryId: 1 },
      { Id: 3, Name: "Prod41", Price: 1000, Quantity: 333, CategoryId: 2 },
      { Id: 4, Name: "Prod31", Price: 1000, Quantity: 522, CategoryId: 2 },
      { Id: 5, Name: "Prod13", Price: 1000, Quantity: 522, CategoryId: 2 },
      { Id: 6, Name: "Prod1r", Price: 1000, Quantity: 22, CategoryId: 3 },
      { Id: 7, Name: "Prod1r", Price: 1000, Quantity: 232, CategoryId: 3 },
      { Id: 8, Name: "Prod1ew", Price: 1000, Quantity: 22, CategoryId: 3 },
      { Id: 16, Name: "Prod13", Price: 1000, Quantity: 322, CategoryId: 3 },
      { Id: 16, Name: "Prod13", Price: 1000, Quantity: 2352, CategoryId: 4 },
      { Id: 166, Name: "Prod16", Price: 1000, Quantity: 22, CategoryId: 4 },
      { Id: 15, Name: "Prod17", Price: 1000, Quantity: 2256, CategoryId: 4 },
      { Id: 156, Name: "Prod18", Price: 1000, Quantity: 262, CategoryId: 4 },
      { Id: 166, Name: "Prod17", Price: 1000, Quantity: 272, CategoryId: 5 },
      { Id: 166, Name: "Prod17", Price: 1000, Quantity: 272, CategoryId: 6 },
    ];

  }
  getByProductId(): IProduct[] {


    return this.productList.filter((c)=>{ return c.CategoryId == this.productId});
  }

  check(){
    console.log("running");
  }

  ngOnChanges(): void {

    console.log('product Id in details:' + this.productId);
    console.log("List:" +this.getByProductId());
    this.check();
    this.getByProductId();

  }
  updateTotalAmount(pAmout:any,pPrice:any){
    this.totalPriceDetails+=pAmout*pPrice.Price;
    console.log("The Obj :" +pPrice);
    console.log("Total Price"+ this.totalPriceDetails);
    this.totalPriceChanged.emit(this.totalPriceDetails);

  }

  ngOnInit(): void { }
}
