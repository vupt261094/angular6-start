import { Component, OnInit, Inject } from '@angular/core';
import { IProductService } from '../../../interfaces/product/product.interface';
import { Router } from '@angular/router';
import { AppSettings } from '../../../constants/app-settings.constant';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  productList = [];
  constructor(@Inject("IProductService") private productService: IProductService, private router: Router, private appSetting: AppSettings) { }

  ngOnInit() {
    this.productService.getListProduct().subscribe((res =>{
      this.productList = res;
    }))
  }

  deleteProduct(id: any){
    this.productService.deleteProduct(id).subscribe((res =>{
      alert("Delete Successfully");
    }))
  }

}
