import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private cart: CartService) { }
  public totalItem : number = 0;
  ngOnInit(): void {
    this.cart.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
