export class DiscountedProduct {
    public discount(price:number, dis:number):void{
        let calDiscount:number = price * (100 - dis) / 100;
        console.log(`ราคาเต็ม: ${price}`)
        console.log(`ส่วนลด ${dis}%`)
        console.log(`ราคาหลังหักส่วนลด: ${calDiscount}`);
    }
}