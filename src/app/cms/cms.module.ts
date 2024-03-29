import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule
  ]
})
export class CmsModule { }
