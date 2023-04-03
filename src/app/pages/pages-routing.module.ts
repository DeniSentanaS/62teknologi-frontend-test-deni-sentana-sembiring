import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { CategoriesComponent } from './categories/categories.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  {
    path:'businesses',
    component: BusinessesComponent
  },
  {
    path:'categories',
    component: CategoriesComponent
  },
  {
    path:'locations',
    component: LocationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
