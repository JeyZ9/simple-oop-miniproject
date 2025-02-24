"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    changePassword(oldPassword, newPassword) {
        if (this.password != oldPassword) {
            return "เปลี่ยนรหัสไม่สำเร็จ";
        }
        this.password = newPassword;
        // console.log(this.password);
        return "เปลี่ยนรหัสสำเร็จ";
    }
}
exports.UserAccount = UserAccount;
