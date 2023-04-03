"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log = console.log;
const admin = 'John123';
const password = 'password123';
const verify = (password) => {
    password ? log('Welcome back!') : log('You do not have privilages...');
};
verify('password123');
exports.default = log;
