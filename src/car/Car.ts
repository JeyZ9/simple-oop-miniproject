export class Car {
    private readonly brand:string;
    private speed:number;

    constructor(brand:string, speed:number=0){
        this.brand = brand;
        this.speed = speed;
    }

    public accelerate(amount:number):void {
        if(amount < 0){
            return ;
        }
        this.speed += amount;
        console.log(`ความเร็วตอนนี้: ${this.speed}/ซม.`);
    }

    public brake(amount:number):void {
        if(amount < 0 || this.speed === 0 || this.speed < 0){
            return ;
        }

        this.speed -= amount;
        console.log(`ความเร็วลดลงเหลือ: ${this.speed}/ซม.`);
    }


}