import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http' 
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetailDto } from '../models/carDetailDto';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44371/api/cars/"
 
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetailDto>>{
    let newPath =this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)    
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath =this.apiUrl + "getbybrand?colorId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)    
  }
  
  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath =this.apiUrl + "getbycolor?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)    
  }

  getCarsByBrandAndColor(brandId:number, colorId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "getbybrandandcolor?brandId="+ brandId +"&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)    
  }

}
