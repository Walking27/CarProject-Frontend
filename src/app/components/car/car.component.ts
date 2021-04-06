import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:CarDetailDto[] =[];
  brands:Brand[]=[];
  colors:Color[]=[];
  dataLoaded = false;
  filterText="";
  brandFilter:Number;
  colorFilter:Number;
  
  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
 this.activatedRoute.params.subscribe(params=>{
  if(params["brandId"] && params["colorId"]){
    this.getCarDetailsByBrandAndColor( params["brandId"], params["colorId"] )
  } else if(params["brandId"]){
      this.getCarsByBrand(params["brandId"])
  } else if(params["colorId"]){
     this.getCarsByColor(params["colorId"])
   }else{
     this.getCars()
   }
 })


  }
  getCars(){
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true;
      
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response =>{
      this.cars = response.data
      this.dataLoaded = true;
    })
  }
    // marka ve renge göre araç bilgilerini getir
    getCarDetailsByBrandAndColor(brandId:number, colorId:number) {
      this.carService.getCarsByBrandAndColor(brandId, colorId).subscribe((response) => {
        this.cars = response.data;
        this.dataLoaded = true;
      });
    }
    addToCart(){
      this.toastrService.success("Kiralandı")
      this.cartService.addToCart
      
    }
    getSelectedBrand(brandId:number){
      if(this.brandFilter == brandId){
        return true;
      } else{
        return false;
      }  
        
    }
    getSelectedColor(colorId:number){
      if(this.colorFilter == colorId){
        return true;
      } else{
        return false;
      }  
    }
  
    
}
