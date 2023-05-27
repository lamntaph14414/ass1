import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Iproduct } from 'src/app/Interfaces/Products';
import { ProductService } from 'src/app/Services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0]
  })
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) { }
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: Iproduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
      }
      this.productService.addProduct(product).subscribe(product => {
        console.log("Thêm Thành công", product);

      })
    }
  }
}
