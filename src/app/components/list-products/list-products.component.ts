import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  listProducts: Product[] = [];

  constructor(private _productService: ProductService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      this.listProducts = data.products;
    }, error => {
      console.log(error);
    })
  }

  deleteProduct(id: any) {
    this._productService.deleteProduct(id).subscribe(date => {
      this.toastr.error('El producto fue eliminado con éxito', 'Producto eliminado');
      this.getProducts();
    }, error => {
      console.log(error);
    })
  }

}
