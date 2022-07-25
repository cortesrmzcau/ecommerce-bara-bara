import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

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

  deletProduct(): void {
    Swal.fire({
      title: 'Are you sure you want remove the item?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Successfully removed', '', 'error')
      }
    })
  }

  applyCoupon() {
    Swal.fire('Coupon applied correctly ', '', 'success');
  }

}
