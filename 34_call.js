// function setUsername(username) {
//     this.username = username;
//     console.log('username already set');
// };

// function createUser(username, email, pass) {
//     setUsername.call(this, username);

//     this.email = email;
//     this.pass = pass
// }

// const user1 = new createUser('chocoboy2004', 'rahul@google.com', 'hg76738^&63')
// console.log(user1);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function setUsername(username, password) {
    this.username = username
    this.password = password
}

function basicDetails(fullname, email, age) {
    this.fullname = fullname
    this.email = email
    this.age = age
}

function isLoggedIn(username, password, fullname, email, age, isLoggedIn) {
    setUsername.call(this, username, password)
    basicDetails.call(this, fullname, email, age)
    this.isLoggedIn = isLoggedIn
}

const user1 = new isLoggedIn('chocoboy2004', 'RG12rg!@', 'rahulghosh', 'chocoboyrick75@gmail.com', 19, true)
console.log(user1);