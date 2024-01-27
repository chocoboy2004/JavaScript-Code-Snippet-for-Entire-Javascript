class user {
    constructor(username) {
        this.username = username
    }
}

class Teacher extends user{
    constructor(username, password, email, designation) {
        super(username)
        this.password = password
        this.email = email
        this.designation = designation
    }

    printDesig() {
        return `${this.username} is a ${this.designation}`
    }
}

const teacher1 = new Teacher('rahulghosh2004', '762ggd7', 'rahul@yahoo.com', 'teacher')
// console.log(teacher1.printDesig());

console.log(teacher1 instanceof Teacher);  // true
console.log(teacher1 instanceof user);  // true