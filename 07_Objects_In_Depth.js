// We can define object in two ways. First is object literal and another is using new keyword.

// We can store a symbol in a variable like below
// let my_symbol = Symbol("@");
// console.log(typeof my_symbol);

// Now i'm going to pass this symbol into the object.

const user_object = {
    user_name: 'chocoboy',
    first_name: 'Rahul',
    last_name: 'Ghosh',
    age: 19,
    location: 'India',
    email: 'meetWithRahul@google.com',
    isLoggedIn: false
    // [my_symbol]: Symbol("@")
};
// console.log(user_object);

// Accessing object's key values using dot notation and square brackets

// console.log(user_object.user_name)
// console.log(user_object["age"]);

// If you want, you can also freeze the object. After freezing, you can't make any changes about the object.

user_object['user_name'] = 'iamrahul';
// console.log(user_object);
// Object.freeze(user_object);
user_object['user_name'] = 'iamRahulGhosh';
// console.log(user_object);


user_object.greeting = function() {
    return (`Hello ${user_object.user_name}`);
}

// console.log(user_object.greeting());


// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------




// Creating a singleton Object
const obj1 = new Object();  // Singleton Object
// console.log(obj1);

const student1 = {
    id: '88378gsv762',
    userName: 'chocoboy',
    fullName: {
        firstName: 'Rahul',
        lastName: 'Ghosh'
    }
};

// console.log(student1.fullName['firstName']);




// Combine two or more objects into a single object
const obj2 = {
    name: "rahul",
    country: "India"
};

const obj3 = {
    id: "7877bhd7",
    roll: "83jjs763"
};

const newObj = Object.assign({}, obj2, obj3);
console.log(newObj);
