// Object literals
// --> Object literals are nothing but the collection of properties and methods
// creating an object literals

const user = {
    userID: 'rahulghosh2004',
    password: 'rahul123',
    isSignedIn: true,
    getUserDetails: function() {
        console.log('user details fetched from database');
    }
}
console.log(user);
console.log(user.userID);
console.log(user.password);
console.log(user.isSignedIn);
console.log(user.getUserDetails());