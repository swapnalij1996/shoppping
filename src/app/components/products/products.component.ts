import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public list: any;
public productList : any ;

  constructor( private us: AuthService ,private cart : CartService) { }

  ngOnInit(): void {
    this.us.getdata().subscribe((res:any)=>{
      console.log(res);
      this.list=res;
      this.list.array.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
      console.log(this.productList)

    })
  }
  
  addtocart( item:any){
this.cart.addtoCart(item)
  }

}
