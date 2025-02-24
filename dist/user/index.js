"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AdminAccount_1 = require("./AdminAccount");
const UserAccount_1 = require("./UserAccount");
const user = new UserAccount_1.UserAccount("wisarut", "wis1234", "664259015@webmail.npru.ac.th");
const admin = new AdminAccount_1.AdminAccount("admin", "admin123", "admin@gmail.com");
// console.log(admin.username);
admin.changePassword("admin123", "newAdmin123");
// console.log(user.email)
// console.log(user.password)
// console.log(admin.email)
// console.log(admin.password)
