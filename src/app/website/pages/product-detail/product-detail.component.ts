import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/shared/sidebar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  collapsed : boolean | null = null;

  constructor(
    private _sidebarService: SidebarService
  ) {
    this.listeningCollapsed();
  }

  ngOnInit(): void {
  }

  listeningCollapsed(): void {
    this._sidebarService.lisStatus$
    .subscribe(
      res => {
        this.collapsed = res;
      }
    );
  }

  addToCart(): void {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product add to cart',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
