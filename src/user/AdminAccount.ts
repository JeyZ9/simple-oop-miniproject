import { UserAccount } from "./UserAccount";

export class AdminAccount extends UserAccount {
    constructor(username:string, password:string, email:string){
        super(username, password, email);
    }
} // admin สามารถรีเซ็ตรหัส user ได้