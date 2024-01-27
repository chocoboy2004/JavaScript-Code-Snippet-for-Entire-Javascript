// Object.prototype.printMessage = function(){
//     console.log('I am the parent');
// }

// function takeTwoNumber(num1, num2) {
//     this.num1 = num1
//     this.num2 = num2
// }

// // takeTwoNumber.printMessage()

// takeTwoNumber.prototype.add = function() {
//     console.log(this.num1 + this.num2);
// }

// takeTwoNumber.prototype.showNumbers = function() {
//     console.log(
//         `
//             First number: ${this.num1}
//             Second number: ${this.num2}
//         `
//     );
// }

// const calculate = new takeTwoNumber(10, 20)
// // calculate.add()
// // calculate.showNumbers()
// // calculate.printMessage()




// const student = {
//     studentName: {
//         firstname: 'rahul',
//         lastname: 'ghosh'
//     },
//     age: 19,
//     department: 'BCA',
//     registrationYear: 2022,
//     currentSemester: 4
// }

// const mentor = {
//     isPresent: true,
//     mentorName: {
//         firstname: 'simi',
//         middlename: 'roy',
//         lastname: 'choudhary'
//     }
// }

// const humanResource = {
//     __proto__: mentor
// }

// Object.setPrototypeOf(mentor, student)

// // console.log(humanResource.mentorName);
// // console.log(humanResource.studentName);



// function setUsername(username) {
//     this.username = username
// }

// function setPassword(pass) {
//     this.pass = pass
// }

// function basicinfo(username, pass, fullname, email) {
//     setUsername.call(this, username)
//     setPassword.call(this, pass)
//     this.fullname = fullname
//     this.email = email
// }

// const user = new basicinfo('rahulghosh2004', 'jjdbb8738db', 'rahulghosh', 'rahul@svims.com')
// // console.log(user);


// class Username {
//     constructor(username, password) {
//         this.username = username
//         this.password = password
//     }
// }

// class BasicDetails extends Username {
//     constructor(username, password, fullname, age, email) {
//         super(username, password)
//         this.fullname = fullname
//         this.age = age
//         this.email = email
//     }
// }

// const userOne = new BasicDetails('rahulghosh2004', 'rahul@2004', 'rahulghsoh', 19, 'rahul@svims.org')
// // console.log(userOne);



// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// const details = Object.getOwnPropertyDescriptor(Math, 'PI')
// // console.log(details)

// const value = {
//     sqr2: 4
// }

// console.log(Object.getOwnPropertyDescriptor(value, 'sqr2'));

// Object.defineProperty(value, 'sqr2', {
//     writable: false
// })

// console.log(Object.getOwnPropertyDescriptor(value, 'sqr2'));


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// async function fetchUser() {
//     const user = await fetch('https://api.github.com/users/chocoboy2004')

//     try {
//         const data = await user.json()
//         console.log(data)
//     } catch {

//     }
// }

// fetchUser()



async function fetchUser() {
    const user = await fetch('https://randomuser.me/api/')
    try {
        const data = await user.json()
        console.log(data);
    } catch (error) {
        console.log('Error: ', error);
    }
}

// fetchUser()





fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(user) {
    const data = user.json()
    return data
})
.then(function(data) {
    console.log(data)
})
.catch(function(error) {
    console.log('Error: ', error)
})