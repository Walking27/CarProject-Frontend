import { Car } from "./car";
import { ResponseModel } from "./responseModel";

export interface CarRespomseModel extends ResponseModel{
    data:Car[];
}