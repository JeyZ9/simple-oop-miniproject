export class UserAccount {
    private readonly username:string;
    private password:string;
    protected email:string;

    constructor(username:string, password:string, email:string){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public changePassword(oldPassword:string, newPassword:string):string{
        if(this.password != oldPassword){
            return "เปลี่ยนรหัสไม่สำเร็จ";
        }
        this.password = newPassword;
        // console.log(this.password);
        return "เปลี่ยนรหัสสำเร็จ";
    }
}