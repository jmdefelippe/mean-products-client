import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { getToken } from 'src/app/utils/auth';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title = 'Detalle de producto';
  id: string | null;
  product: Product;

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productService: ProductService,
    private aRouter: ActivatedRoute) {
      this.id = this.aRouter.snapshot.paramMap.get('id');
      this.product = new Product("","","",-1)
    }

  ngOnInit(): void {
    if (!getToken()) {
      this.router.navigate(['/login']);
    }
    this.getProduct(this.id ?? "-1");
  }

  getProduct(id: string) {
    if(this.id !== null) {
      this._productService.getProduct(this.id).subscribe(data => {
        this.product = data;
        this.router.navigate([`/detalle-producto/${this.id}`]);
      })
    }
  }
}
