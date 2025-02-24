"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavingAccount = void 0;
const BankAccount_1 = require("./BankAccount");
class SavingAccount extends BankAccount_1.BankAccount {
    constructor(accountNumber, balance, ownerName, interestRate) {
        super(accountNumber, balance, ownerName);
        this.interestRate = interestRate;
    }
    applyInterest() {
        const interest = this.getBalance() * this.interestRate;
        this.deposit(interest);
        console.log(`Applied interest:${this.interestRate}, new balance:${this.getBalance()}`);
    }
    toString() {
        // return `${this.ownerName}, ${this.balance}`
        return `${this.ownerName}, ${this.getBalance()}`;
    }
}
exports.SavingAccount = SavingAccount;
