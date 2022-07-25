import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @ViewChild("icono2") icono2: ElementRef;
  @ViewChild("text2") text2: ElementRef;
  @ViewChild("icono1") icono1: ElementRef;
  @ViewChild("text1") text1: ElementRef;

  collapsed : boolean | null = null;
  paymentInfo: boolean = false;
  shippingInfo: boolean = true;
  backToResults: string | null = 'Back to Shopping Cart';
  col: boolean | null = null;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private _renderer: Renderer2,
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

  changePayInfo(): void {

    const changeColorIcono1 = this.icono1.nativeElement;
    const changeColorText1 = this.text1.nativeElement;

    const changeColorIcono2 = this.icono2.nativeElement;
    const changeColorText2 = this.text2.nativeElement;

    this.shippingInfo = !this.shippingInfo;

    if (this.shippingInfo) {
      this.paymentInfo = false;
      this._renderer.setStyle(changeColorIcono1, 'color', 'white');
      this._renderer.setStyle(changeColorText1, 'color', 'white');

      this._renderer.setStyle(changeColorIcono2, 'color', '#788388');
      this._renderer.setStyle(changeColorText2, 'color', '#788388');
    } else {
      this.paymentInfo = true;
      this._renderer.setStyle(changeColorIcono2, 'color', 'white');
      this._renderer.setStyle(changeColorText2, 'color', 'white');

      this._renderer.setStyle(changeColorIcono1, 'color', '#788388');
      this._renderer.setStyle(changeColorText1, 'color', '#788388');
    }
  }

  confirmOrder() {
    Swal.fire('Coupon applied correctly ', '', 'success');
  }

}
