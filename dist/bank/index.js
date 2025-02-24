"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BankAccount_1 = require("./BankAccount");
const SavingAccount_1 = require("./SavingAccount");
const bank = new BankAccount_1.BankAccount("5402000000", 120, "Wisarut");
const saving = new SavingAccount_1.SavingAccount("5402000000", 250, "Wisarut", 0.09);
console.log(bank.getBalance());
console.log(bank.getOwnerName());
saving.applyInterest();
