import { AdminAccount } from "./AdminAccount";
import { UserAccount } from "./UserAccount";

const user = new UserAccount("wisarut", "wis1234", "664259015@webmail.npru.ac.th");
const admin = new AdminAccount("admin", "admin123", "admin@gmail.com");

// console.log(admin.username);
admin.changePassword("admin123", "newAdmin123");
// console.log(user.email)
// console.log(user.password)

// console.log(admin.email)
// console.log(admin.password)