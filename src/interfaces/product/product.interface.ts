import { Product } from '../../models/product'
import { Observable } from 'rxjs';

export interface IProductService{
    getListProduct();
    getDetail(id: string): Observable<Product>;
    addProduct(product: Product);
    updateProduct(product: Product);
    deleteProduct(id: Product);
}