import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/shared/sidebar.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  collapsed : boolean | null = null;

  constructor(
    private _sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this._sidebarService.lisStatus$
    .subscribe(
      res => {
        this.collapsed = res;
      }
    );
  }

}
