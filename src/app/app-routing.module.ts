import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { CarComponent } from './components/car/car.component';


const routes: Routes = [
  {path:"", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/:brandId:colorId", component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
