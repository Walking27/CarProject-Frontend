/*
    "carId": 1,
    "brandName": "Bmw",
    "colorName": "Beyaz               ",
    "description": "Sahibinden satlik 0 ayarinda",
    "modelYear": "2020      ",
    "dailyPrice": 150.0000,
    "colorId": 1,
    "brandId": 1
*/

export interface CarDetailDto{
    carId:number,
    brandId:number
    brandName:string
    colorId:number,
    colorName:string,
    description:string,
    modelYear:string,
    dailyPrice:string

}