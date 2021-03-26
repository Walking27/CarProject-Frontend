import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface BrandResponseModele extends ResponseModel{
data:Brand[];
}