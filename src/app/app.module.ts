import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailDtoComponent } from './components/car-detail-dto/car-detail-dto.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';

import {ToastrModule} from 'ngx-toastr'
import { from } from 'rxjs';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { BrandPipe } from './pipes/brand.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import { CustomerComponent } from './components/customer/customer.component';




@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    CarDetailDtoComponent,
    ColorComponent,
    BrandComponent,
    VatAddedPipe,
    CartSummaryComponent,
    BrandPipe,
    ColorPipe,
    CarFilterComponent,
    CustomerComponent
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
