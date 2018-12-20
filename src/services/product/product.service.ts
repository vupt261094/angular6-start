import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

// Interface
import { IProductService } from "../../interfaces/product/product.interface";
import { Product } from '../../models/product';
import { ConfigUrl } from '../../constants/config-url.constant';


@Injectable({
  providedIn: 'root'
})
export class ProductService implements IProductService{
    
    constructor(private httpClient: HttpClient, private configUrl: ConfigUrl) { }


    getListProduct() {
        return this.httpClient.get(this.configUrl.urlAPI + "/product");
    }
    getDetail(id: string): Observable<Product> {
        let apiURL = this.configUrl.urlAPI + "/product/" + id;
        return this.httpClient.get<Product>(apiURL);
    }
    addProduct(product: Product) {
        let apiURL = this.configUrl.urlAPI + "/product";
        return this.httpClient.post(apiURL, product);
    }
    updateProduct(product: Product) {
        let apiURL = this.configUrl.urlAPI + "/product/" + product.id;
        return this.httpClient.put(apiURL, product);
    }

    deleteProduct(id: Product) {
        return this.httpClient.delete(this.configUrl.urlAPI + "/product/" + id);
    }
  
  
  

//   getProfile(userId: number) :Observable<User>{
//     let apiURL = "http://5c03ec37d5f2070013d58094.mockapi.io/api/users/" + userId;
//     return this.httpClient.get<User>(apiURL);
//   }

//   updateProfile(user: User){
//     const headers = new HttpHeaders().set("Content-Type", "application/json");
//     let apiURL = "http://5c03ec37d5f2070013d58094.mockapi.io/api/users/" + user.userId;
//     return this.httpClient.put(apiURL, user, {headers});
//   }
}
