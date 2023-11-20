import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {AppStateService} from "../services/app-state.service";
import {Router} from "@angular/router";
import {Product} from "../model/Product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  // public products :Array<Product> = [];
  // public keyword:string = "";
  //  totalPages:number = 0;
  //  pageSize:number = 3;
  //  currentPage:number = 1;

  constructor(private productService: ProductService,
              public appState: AppStateService,
              private router: Router) {
  }

  ngOnInit() {
    this.searchProduct();
  }
  searchProduct() {
    this.productService.searchProduct(this.appState.productsState.keyword, this.appState.productsState.currentPage, this.appState.productsState.pageSize)
      .subscribe({
        next: (resp) => {
          // @ts-ignore
          this.appState.productsState.products = resp.body as Product[];
          let totalProducts:number = parseInt(resp.headers.get('x-total-count')!);
          this.appState.productsState.totalPages = Math.floor(totalProducts / this.appState.productsState.pageSize);
          if (totalProducts % this.appState.productsState.pageSize != 0 )
            this.appState.productsState.totalPages++;
          console.log(this.appState.productsState.totalPages)


        }, error : err => {
          console.log(err)
        }
      })
    // this.products$ = this.productService.getProduct();
  }
  handelCheckProduct(product: Product) {
    this.productService.checkProduct(product)
      .subscribe({
        next: updatedProduct => {
          product.checked = !product.checked;
          // this.products.map(p => {
          //   if (p.id == product.id){
          //     return updatedProduct
          //   }else return p;
          // })
        }
      })
    // product.checked =!product.checked;
  }

  handleDelete(product : Product) {
    if (confirm("are you sure?"))
      this.productService.deleteProduct(product).subscribe({
        next: value => {
          // this.getProduct();
          this.appState.productsState.products = this.appState.productsState.products.filter((p:any)=> p.id != product.id);
        }
      });
  }

  // searchProduct() {
  //   this.pageSize=1;
  //   this.totalPages=0;
  //   this.productService.searchProducts(this.keyword, this.currentPage, this.pageSize ).subscribe({
  //     next: value => {
  //       this.products = value;
  //     }
  //   })
  // }

  handleGoToPage(page: number) {
    this.appState.productsState.currentPage=page;
    this.searchProduct();
  }

  handleEdit(product: Product) {
    this.router.navigateByUrl(`/editproduct/${product.id}`)
  }
}

