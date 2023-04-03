"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const script_1 = __importDefault(require("./script"));
class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    getUser() {
        return (`First name : ${this.firstname}\nLast name : ${this.lastname}\nAge: ${this.age}`);
    }
}
const user1 = new User('John', 'Doe', 23);
(0, script_1.default)(user1.getUser());
