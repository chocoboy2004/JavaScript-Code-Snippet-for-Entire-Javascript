function multiplyBy5(num) {
    return num*5
}

multiplyBy5.power = 2

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);



function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Score is: ${this.score}`);
}

const user1 = new createUser('chocoboy', 25)

// user1.increment()
// user1.printMe()


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


let myname = 'Rahul  '
let mychannel = 'codewithrahul  '

// console.log(myname.trueLength());



const myHeros = ['thor', 'spiderman']

const heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    spidyPower: function(){
        console.log(`Spidy power is: ${this.spiderman}`);
    }
}

Object.prototype.rahul = function(){
    console.log(`My name is Rahul`);
}

// console.log(heroPower.rahul());
// console.log(myHeros.rahul());
// console.log(myname.rahul());

Array.prototype.greet = function(){
    console.log(`Hello JavaScript`);
}

// console.log(myHeros.greet());
// console.log(heroPower.greet());  // It will return an error


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Prototypal inheritence

const student = {
    username: 'student1',
    email: 'student1@yahoo.com'
}

const teacher = {
    makeVideo: true
}

const teachingAssistant = {
    isAvailable: false
}

const TASupport = {
    available: true,
    content: 'JS Content',
    // __proto__: teachingAssistant
}

// teacher.__proto__ = student  // oldschool

// console.log(teacher.username);
// console.log(teacher.email);  // accessing student details from teacher object

// console.log(TASupport.isAvailable);  // Accesing teachingAssistant object


// Modern syntax

Object.setPrototypeOf(TASupport, teachingAssistant);
// console.log(TASupport.isAvailable);

Object.setPrototypeOf(teacher, student)
// console.log(teacher.username);




String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

myname.trueLength()
'alpha'.trueLength()