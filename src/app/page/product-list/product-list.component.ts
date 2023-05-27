import { Component } from '@angular/core';
import { Iproduct } from 'src/app/Interfaces/Products';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Iproduct[] = [];
  constructor(private productService: ProductService){
    this.productService.getProducts().subscribe(data=>{
      this.products = data
    }, error =>{
      console.log(error.message);
    })
  }
  removeItem(id:any){
    this.productService.deleteProduct(id).subscribe(()=>{
      console.log('Xóa thành công');
      
    })
  }
}
