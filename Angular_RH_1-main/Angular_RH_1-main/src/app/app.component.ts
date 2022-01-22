import { Component } from '@angular/core';
import { CompanyInfo } from './ViewModel/company-info';
import { IProduct } from './ViewModel/ViewModel/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  companyInfo: CompanyInfo;
  mainProducts: IProduct[];
  /**
   *
   */
  constructor() {
    this.companyInfo = new CompanyInfo("ITI", "My Logo", ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service 6"], true);
    this.mainProducts = [
      { Id: 1, Name: "Pro1", Quantity: 10, Price: 22 },
      { Id: 2, Name: "Pro1", Quantity: 10, Price: 22 },
      { Id: 2, Name: "Pro1", Quantity: 10, Price: 22 },
      { Id: 2, Name: "Pro1", Quantity: 22, Price: 22 },
      { Id: 2, Name: "Pro1", Quantity: 134, Price: 222 },
      { Id: 2, Name: "Pro1", Quantity: 410, Price: 22224 },
      { Id: 2, Name: "Pro1", Quantity: 130, Price: 22 },
      { Id: 3, Name: "Pro1", Quantity: 102, Price: 22433 },
      { Id: 4, Name: "Pro1", Quantity: 105, Price: 2245 },
      { Id: 5, Name: "Pro1", Quantity: 103, Price: 66 },
      { Id: 12, Name: "Pro1", Quantity: 102, Price: 66 },
      { Id: 6, Name: "Pro1", Quantity: 1230, Price: 422 },
      { Id: 7, Name: "Pro1", Quantity: 1032, Price: 223 },
      { Id: 33, Name: "Pro1", Quantity: 1024, Price: 226 },
      { Id: 13, Name: "Pro1", Quantity: 1045, Price: 226 },
      { Id: 133, Name: "Pro1", Quantity: 1035, Price: 227 },


    ]
    console.log("fired fron on constructor");
    var set = new Set();
    set.add(1);
    set.add(1);
    set.add("wwww");
    set.add(3);
    set.add(4);
    set.forEach((c) => { console.log(c); });


  }
  ngOnInit() {
    console.log("fired from on iniit");
  }
  ngOnDestroy() {
    console.log("fired fron on destroy");
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("fired fron on after content init");

  }
  displayName() {
    this.companyInfo.name = "Clicked";
  }
  toggleWord() {
    this.companyInfo.name = "clicked";

  }
  addStyle() {
    console.log("working");

  }
}
