"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = require("./Product");
const DiscountedProduct_1 = require("./DiscountedProduct");
const product1 = new Product_1.Product("p01", "Lay", 100);
const discount10 = new DiscountedProduct_1.DiscountedProduct();
discount10.discount(product1.getPrice(), 10);
