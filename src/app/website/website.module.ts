import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';

import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    HomeComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
