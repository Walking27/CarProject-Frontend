import { Customer } from "./customer";
import { ListResponseModel } from "./listResponseModel";
import { ResponseModel } from "./responseModel";

export interface CustomerResponseModel extends ResponseModel{
    data:Customer[];
}