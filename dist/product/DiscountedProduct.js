"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountedProduct = void 0;
class DiscountedProduct {
    discount(price, dis) {
        let calDiscount = price * (100 - dis) / 100;
        console.log(`ราคาเต็ม: ${price}`);
        console.log(`ส่วนลด ${dis}%`);
        console.log(`ราคาหลังหักส่วนลด: ${calDiscount}`);
    }
}
exports.DiscountedProduct = DiscountedProduct;
