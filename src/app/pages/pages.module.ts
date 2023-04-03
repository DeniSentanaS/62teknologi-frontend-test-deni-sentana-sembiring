import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { LocationsComponent } from './locations/locations.component';
import { BusinessesComponent } from './businesses/businesses.component';
import {AppMaterialModule} from "../material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxStarsModule} from "ngx-stars";
import { BusinessesFormComponent } from './businesses/businesses-form/businesses-form.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { LocationsFormComponent } from './locations/locations-form/locations-form.component';
import {ToastrModule} from "ngx-toastr";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    CategoriesComponent,
    LocationsComponent,
    BusinessesComponent,
    BusinessesFormComponent,
    CategoriesFormComponent,
    LocationsFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStarsModule,
    ToastrModule,
    CurrencyMaskModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
