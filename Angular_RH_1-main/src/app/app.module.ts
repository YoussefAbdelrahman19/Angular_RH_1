import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Header/header/header.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { ContentComponent } from './Components/Content/content/content.component';
import { UsdtoegpPipe } from './Pipes/usdtoegp.pipe';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { OrderDetailsComponent } from './Components/Order/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    UsdtoegpPipe,
    OrderMasterComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
