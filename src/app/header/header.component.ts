import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;
  public searchProducts !: string;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
  }
  search(event: any) {
    this.searchProducts = (event.target as HTMLInputElement).value;
    console.log(this.searchProducts);
    this.cartService.search.next(this.searchProducts);
  }
}