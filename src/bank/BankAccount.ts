export class BankAccount {
    private readonly accountNumber:string;
    private balance:number;
    protected ownerName:string;

    constructor(accountNumber:string, balance:number, ownerName:string){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }

    public getBalance():number{
        return this.balance;
    }

    public getOwnerName():string{
        return this.ownerName;
    }

    public deposit(amount:number):void{
        if(amount <= 0){
            return;
        }
        this.balance += amount;
    }

    public withdraw(amount:number):string{
        if(amount > this.balance || amount < 0){
            return "ยอดเงินไม่เพียงพอ";
        }
        this.balance -= amount;
        return "ถอนเงินสำเร็จ";
    }
}