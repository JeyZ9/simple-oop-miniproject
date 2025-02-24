class DiscountedProduct {
    public discount(price:number, dis:number):void{
        let calDiscount:number = price * (100 - dis) / 100;
        console.log(calDiscount);
    }
}