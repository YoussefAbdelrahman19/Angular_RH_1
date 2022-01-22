import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit, OnChanges {
  @Input() productId: number = 0;
  constructor() {}

  ngOnChanges(): void {
    console.log('product Id :' + this.productId);
  }

  ngOnInit(): void {}
}
