import { Component, OnInit } from '@angular/core';
import { ICategoriy } from 'src/app/ViewModel/ViewModel/icategoriy';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit {
  categoryList: ICategoriy[]=[];
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

  ngOnInit(): void {
  }

}
