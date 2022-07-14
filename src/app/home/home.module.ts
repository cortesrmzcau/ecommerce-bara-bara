import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
