import { Product } from "./Product";
import { DiscountedProduct } from "./DiscountedProduct";

const product1 = new Product("p01", "Lay", 100);

const discount10 = new DiscountedProduct();
discount10.discount(product1.getPrice(), 10);
