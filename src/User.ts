import log from './script'

class User {
    [x: string]: string | number | Function;
    constructor(firstname:string, lastname:string, age:number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    getUser() {
        return (
            `First name : ${this.firstname}\nLast name : ${this.lastname}\nAge: ${this.age}`
        )
    }
}

const user1 = new User('John', 'Doe', 23);

log(user1.getUser());