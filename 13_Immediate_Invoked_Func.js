// Immediately Invoked Function Expression

function connect() {
    console.log('DB Connected');
};

// connect();   // It was normal function


// Now this will be IIFE

(function greet() {
    console.log('Hello');
})();


(() => {
    console.log(`DB Connected`);
})();


// Adding two number using Immediately Invoked Function Expression

console.log(((num1, num2) => {
    return num1 + num2;
})(10, 20));