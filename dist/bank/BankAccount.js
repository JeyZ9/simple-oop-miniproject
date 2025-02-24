"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, balance, ownerName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }
    getBalance() {
        return this.balance;
    }
    getOwnerName() {
        return this.ownerName;
    }
    deposit(amount) {
        if (amount <= 0) {
            return;
        }
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance || amount < 0) {
            return "ยอดเงินไม่เพียงพอ";
        }
        this.balance -= amount;
        return "ถอนเงินสำเร็จ";
    }
}
exports.BankAccount = BankAccount;
