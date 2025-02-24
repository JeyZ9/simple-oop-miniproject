import { BankAccount } from "./BankAccount";
import { SavingAccount } from "./SavingAccount";

const bank = new BankAccount("5402000000", 120, "Wisarut");

const saving = new SavingAccount("5402000000", 250, "Wisarut", 0.09);

console.log(bank.getBalance());
console.log(bank.getOwnerName());

saving.applyInterest();