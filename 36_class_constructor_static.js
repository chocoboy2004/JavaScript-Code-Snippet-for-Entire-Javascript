// class user {
//     constructor(username, password, email) {
//         this.username = username
//         this.password = password
//         this.email = email
//     }

//     encryptPassword() {
//         return `7737ddggcb87${this.password}877fbc77dg`
//     }

//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new user('chocoboy2004', 'RG12rg!@', 'rahul@meta.com')
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());



/*
   --> If there is no class concept present in the JavaScript, what will happen ? How we can achive this ?
   --> It is not at all deficult to achieve. Let's see ....
*/


// creating a user function and pass parameters as username, password and email
function user(username, password, email) {
    // using this keyword we will set values
    this.username = username
    this.password = password
    this.email = email
}

// Now, we have to access the user prototype and inject a new function named 'encryptPassword'
user.prototype.encryptPassword = function() {
    return `7737ddggcb87${this.password}877fbc77dg`
}

// Again, we will create an another function inside the user prototype named 'changeUsername'
user.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}

// creating an instance of the user function
const user1 = new user('iamrahul', 'rahul@2004', 'rahul@amazon.com')
console.log(user1.encryptPassword());
console.log(user1.changeUsername());