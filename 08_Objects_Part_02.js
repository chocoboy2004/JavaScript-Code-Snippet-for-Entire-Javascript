const tinderUser = new Object();
tinderUser.id = 'abc123';
tinderUser.name = 'Mukesh Ambani';
tinderUser.sex = 'Male';
tinderUser.age = 22;
tinderUser.isLoggedIn = true;

// console.log(tinderUser['id'])
// console.log(tinderUser['name'])
// console.log(tinderUser['sex'])
// console.log(tinderUser['age'])
// console.log(tinderUser['isLoggedIn'])

// console.log(tinderUser);


// Print all keys
// console.log(Object.keys(tinderUser));

// Print all Values
// console.log(Object.values(tinderUser));

// Check if any property is present or not
// console.log(tinderUser.hasOwnProperty('name'));  // true
// console.log(tinderUser.hasOwnProperty('location'));  // false

// Creating a nested Object
const anotherUser = {
    id: 'pqr321',
    userName: {
        userFullName: {
            firstName: 'Atul',
            lastName: 'Das'
        }
    }
};

// console.log(anotherUser);

// Accesing values from a nested object
// console.log(anotherUser.userName.userFullName.firstName);
// console.log(anotherUser.userName.userFullName.lastName);

// console.log(anotherUser['userName']['userFullName']['firstName']);
// console.log(anotherUser['userName']['userFullName']['lastName']);




// --------------------------------------------------------------------------------------------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// --------------------------------------------------------------------------------------------------

// Combaining Two or more objects into an single object

const personalDetails = {
    id: 'hsbb8772',
    userName: 'Devil',
    email: 'devil@gmail.com'
};

const moreDetails = {
    location: 'Asia',
    country: 'India'
};

// const newObject = {personalDetails, moreDetails};  // It is not the right way to club objects into an single object

// Using assign method ++++++++++++++++++++++++++++++++++++++++++++++++++++++
const obj = Object.assign({}, personalDetails, moreDetails);
// console.log(obj);

// Or we can use Spreas operator   ++++++++++++++++++++++++++++++++++++++++
const newObj = {...personalDetails, ...moreDetails};
// console.log(newObj);


// --------------------------------------------------------------------------------------------------------
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// --------------------------------------------------------------------------------------------------------

// Objects inside an array
const users = [
    {id: '8763g62', location: 'India'},
    {id: 'kbkcbjc5', location: 'China'},
    {id: 'Ngsv$35s', location: 'South Koria'},
    {id: '77878bx2', location: 'Vietnam'},
    {id: '652ff42s76ds', location: 'Bangladesh'},
    {id: '873vbs5si', location: 'Bhutan'},
];

// console.log(users);

// Accessing individual Objects (Array elements)
// console.log(users[0].id);
// console.log(users[1]['location']);



// -------------------------------------------------------------------------------------------

// Object De-Structure

const rechargeDetails = {
    user: 'Rahul Ghosh',
    provider: 'Vi',
    area: 'Kolkata',
    currentPlan: 299
};

console.log(rechargeDetails.user);  // To lengthy

// So we can use this

const {currentPlan: amount} = rechargeDetails;
// console.log(amount);  // Object de structuring