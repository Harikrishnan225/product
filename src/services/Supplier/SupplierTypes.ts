import {ProductForm} from "../../services/ProductService/ProductTypes";

export interface Supplier {
    id: number;
    name: string;
    address: string;
    gstn: string;
    products: ProductForm[];
  }
  