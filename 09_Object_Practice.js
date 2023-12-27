const obj = {
    id: 'iamrahul',
    name: 'Rahul Ghosh',
    location: 'India',
    state: 'West Bengal',
    city: 'Kolkata'
};

// console.log(obj);

// Deleting a key value pair using 'delete' operator
delete obj.city;
// console.log(obj);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object.assign() property
// It allows to copy all the key value pairs of two or more objects into a single object.

// creating an object
const obj1 = new Object();
obj1.name = 'Ranita Nath';
obj1.location = 'India';

// creating an another object
const obj2 = {
    anotherName: 'Rahul Ghosh',
    anotherLocation: 'India',
    state: 'West Bengal',
    city: 'Kolkata'
};

// copying these two objects into an another object

const newObj = Object.assign({}, obj1, obj2);
// console.log(newObj);


// or insted of using Object.assign() property, we can use spread operator

const obj3 = {...obj1, ...obj2};
// console.log(obj3);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object.entries() property
// It returns all key value pairs in individual arrays. [['key1', 'value1'], ['key2', 'value2'], ...]

const properties = Object.entries(obj);
// console.log(properties); 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object.freeze() property
// It prevents manipulation or deletion of any properties of an object
const course = {
    courseName: 'JavaScript for beginners to advance',
    coursePrice: 'Rs 599 only',
    courseInstructor: 'Hitesh Chowdhury'
};

// console.log(course);
// console.log(course['courseInstructor']);  // Hitesh Chowdhury
course['courseInstructor'] = 'Rahul Ghosh';  // value of 'courseInstructor' is changed
// console.log(course['courseInstructor']);
Object.freeze(course);
course['courseInstructor'] = 'Sanket Singh';  // Value is not changed due to the Object.freeze() property
// console.log(course['courseInstructor']);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Object.getOwnPropertyNames()
/*
The Object.getOwnPropertyNames() static method returns an array of all properties (including non-enumerable properties except for those which use Symbol) 
found directly in a given object.
*/ 
const propertyNames = Object.getOwnPropertyNames(course);
// console.log(propertyNames);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object.prototype.hasOwnProperty()
/*
The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the 
specified property as its own property (as opposed to inheriting it).
*/
const student1 = {
    rollNo: 28637715,
    name: 'Shubhau Kanjilal',
    college: 'SVIMS',
    department: 'BCA'
};
// console.log(student1.hasOwnProperty('name'));  // true

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object.isFrozen()
// The Object.isFrozen() static method determines if an object is frozen.
// console.log(Object.isFrozen(student1)); // False, because the object is not freezed yet.
Object.freeze(student1);  // Now it is freezed
// console.log(Object.isFrozen(student1));  // true

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object.keys() & Object.values()
/*
1. The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.
2. The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.
*/
const student2 = {
    rollNo: 98557282,
    name: 'Surjya Jyoti Ghosh',
    college: 'SVIMS',
    department: 'BCA'
};
// console.log(Object.keys(student2));  // ['rollNo', 'name', 'college', 'department']
// console.log(Object.values(student2));  // [98557282, 'Surjya Jyoti Ghosh', 'SVIMS', 'BCA']