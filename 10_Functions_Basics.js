// Creating function for add two numbers

function addTwoNumbers (num1, num2) {
    console.log(num1 + num2);
};

// addTwoNumbers(10, 12);  // 22
// console.log(addTwoNumbers(10, 12)); // It will show undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// we can also return a value from the function

function addTwo (num1, num2) {
    let result = num1 + num2;
    return result;
};

// simply calling the function
// addTwo(10, 20); // it called the the funtion but not showing it
// console.log(addTwo(10, 20));  // it also called the function and showing the value that is returned by the function

// Or, we can store the returned value in a variable
let storeValue = addTwo(10, 20);
// console.log(storeValue);   // Output: 30

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function greetingMessage(userName) {
    if (userName === undefined) {
        return ('Oops! Please enter a name');
    };
    return `Hello ${userName}! Welcome back`;
};
// console.log(greetingMessage());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice (...items) {   // ... is known as rest as well as spread operator
    return items;
};
// console.log(calculateCartPrice(199, 159, 249));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Passing an object into a function

const cartInformation = {
    userName: 'Rahul Ghosh',
    billingAddress: '50, D.D Mondal Ghat Road, Kolkata - 700076',
    itemName: 'Fundamentals of Database Systems',
    itemCount: 1,
    unitPrice: 616
};

function showDetails (cartInformation) {
    console.log(
        `
        User Name : ${cartInformation.userName}
        Billing Address : ${cartInformation.billingAddress}
        Item Name : ${cartInformation.itemName}
        Item Count : ${cartInformation.itemCount}
        Unit Price : ${cartInformation.unitPrice}
        `
    );
};

// showDetails(cartInformation);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const user = {
    userName: 'Hitesh Chowdhury',
    age: 29
};

function userInfo (user) {
    if (!user.userName || !user.age) {
        console.log('Please check the informations');
        return;
    };
    return (`User Name: ${user.userName} and Age: ${user.age}`);
};

// console.log(userInfo(user));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Passing array into an object
const numbers = [10, 11, 12, 13];

function showNumbers (numbers) {
    return numbers;
};

console.log(showNumbers(numbers));