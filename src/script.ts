const log = console.log;

const admin:string = 'John123';
const password:string = 'password123';

const verify = (password:string) => {
    password ? log('Welcome back!') : log('You do not have privilages...');
}

verify('password123');

export default log;