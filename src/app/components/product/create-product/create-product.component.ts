import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { getToken } from 'src/app/utils/auth';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productForm: FormGroup;
  title = 'Crear producto';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productService: ProductService,
              private aRouter: ActivatedRoute) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (!getToken()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/crear-producto']);
    }
    this.isUpdate();
  }

  createProduct() {
    const PRODUCT: Product = {
      name: this.productForm.get('name')?.value,
      category: this.productForm.get('category')?.value,
      location: this.productForm.get('location')?.value,
      price: this.productForm.get('price')?.value
    }

    if(this.id !== null) {
      // update product
      this._productService.updateProduct(this.id, PRODUCT).subscribe(data => {
        this.toastr.info('El producto fue actualizado con éxito!', 'Producto actualizado!', { timeOut: 1500 });
        this.router.navigate(['/']);
      })
    } else {
      // create product
      this._productService.createProduct(PRODUCT).subscribe(data => {
        this.toastr.success('El producto fue registrado con éxito!', 'Producto registrado!', { timeOut: 1500 });
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productForm.reset();
      })
    }
  }

  isUpdate() {
    if(this.id !== null) {
      this.title = 'Editar producto';
      this._productService.getProduct(this.id).subscribe(data => {
        this.productForm.patchValue({
          name: data.name,
          category: data.category,
          location: data.location,
          price: data.price
        })
      })
    }
  }

}
