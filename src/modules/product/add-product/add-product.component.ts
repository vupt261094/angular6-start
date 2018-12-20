import { Component, OnInit, Inject } from '@angular/core';
import { IProductService } from '../../../interfaces/product/product.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product';
import { AppSettings } from '../../../constants/app-settings.constant';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public productId: string;
  public isEditMode: boolean;
  public product: Product;

  constructor(@Inject("IProductService") private productService: IProductService, private router: Router, private activatedRouter: ActivatedRoute,
    private appSetting: AppSettings,
    private toastr: ToastrService) {
    this.product = new Product();
  }

  ngOnInit() {
    
    this.activatedRouter.params.subscribe((params => {
      if (params["id"]) {
        this.isEditMode = true;
        this.productId = params["id"];

        this.productService.getDetail(this.productId).subscribe(((res: Product) => {
          this.product = res;
        }))
      } else {
        this.isEditMode = false;
      }
    }))
  }

  submit(product: Product) {
    if (this.isEditMode) {
      this.productService.updateProduct(product).subscribe((res => {
        this.toastr.success("Update Product Successfull");
        this.router.navigateByUrl(this.appSetting.states.product.list);
      }))
    } else {
      this.productService.addProduct(product).subscribe((res => {
        this.toastr.success("Create Product Successfull");
        this.router.navigateByUrl(this.appSetting.states.product.list);
      }))
    }
  }

}
