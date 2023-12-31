const user = {
    userName: 'Rahul',
    price: 249,

    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to website`);
        console.log(this);
    }
};

// user.welcomeMessage();
// user['userName'] = 'Rakesh';
// user.welcomeMessage();

// console.log(this);


function fun() {
    console.log(this);
};

// fun();



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Arrow function
const greet = () => {
    console.log('Hello JavaScript');
};

// greet();


const addTwoNumbers = (num1, num2) => {  // // If you use curly braces, you have to write return keyword.
    return (num1 + num2);
}
// console.log(addTwoNumbers(10, 14));

const addTwo = (num1, num2) => (num1 + num2);  // If you use braces, no need to write return keyword.
// console.log(addTwo(11, 33));


// Creating an object 
const course = {
    courseName: 'JavaScript in Hindi',
    instructor: 'Hitesh Chowdhury',
    coursePrice: 'Free'
};

const courseDetails = (course) => {
    console.log(course.courseName);
    console.log(course.instructor);
    console.log(course.coursePrice);
};

// courseDetails(course);