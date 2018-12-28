import { Component, OnInit, Inject, Input } from '@angular/core';
import { IProductService } from '../../../interfaces/product/product.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/product';
import { AppSettings } from '../../../constants/app-settings.constant';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public productId: string;
  public isEditMode: boolean;
  public product: Product;
  public submitted = false;
  productForm: FormGroup;
  public isShow: boolean = false;

  constructor(@Inject("IProductService") private productService: IProductService, private router: Router, private activatedRouter: ActivatedRoute,
    private appSetting: AppSettings,
    private toastr: ToastrService,
    private formBuilder: FormBuilder) {
      this.product = new Product();
  }

  ngOnInit() {
    // Init reactive control
    // Using FormGroup
    
    // this.productForm = new FormGroup({
    //   id: new FormControl(),
    //   name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    //   type: new FormControl('', Validators.required),
    //   price: new FormControl('', [Validators.required, Validators.pattern("[0-9]+")])
    // })

    // Using FormBuilder
    this.productForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(6)]],
      type: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern("[0-9]+")]]
    })

    

    this.activatedRouter.params.subscribe((params => {
      if (params["id"]) {
        this.isEditMode = true;
        this.productId = params["id"];

        this.productService.getDetail(this.productId).subscribe(((res: Product) => {
          this.product = res;

          // binding value from api to model
          this.productForm.setValue({
            id: res.id,
            name: res.name,
            type: res.type,
            price: res.price,
          })
        }))
      } else {
        this.isEditMode = false;
      }
    }))
  }

  callPhone(phone: any){
    console.log(phone);
  }
  submit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }

    if (this.isEditMode) {
      this.productService.updateProduct(this.productForm.value).subscribe((res => {
        this.toastr.success("Update Product Successfull");
        this.router.navigateByUrl(this.appSetting.states.product.list);
      }))
    } else {
      this.productService.addProduct(this.productForm.value).subscribe((res => {
        this.toastr.success("Create Product Successfull");
        this.router.navigateByUrl(this.appSetting.states.product.list);
      }))
    }
  }

}
