export class Product {
    private readonly id:string;
    private name:string;
    private price:number;

    constructor(id:string, name:string, price:number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getPrice():number{
        return this.price;
    }

    public setPrice(price:number):void{
        this.price = price;
    }
}