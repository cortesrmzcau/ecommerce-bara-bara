import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
