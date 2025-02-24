"use strict";
class DiscountedProduct {
    discount(price, dis) {
        let calDiscount = price * (100 - dis) / 100;
        console.log(calDiscount);
    }
}
