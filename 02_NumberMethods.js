// toString()
// we use "toString()" to convert a number into string
let rollNo = 201;
// console.log(rollNo);
// console.log(typeof rollNo);

// console.log(rollNo.toString());
// console.log(typeof rollNo.toString());


// toExponentioal()
let num = 20.1634;
// console.log(num.toExponential(2));
// console.log(num.toExponential(3));
// console.log(typeof num.toExponential(4)); // also return a string


// toFixed()
// toFixed() returns a string, with the number written with a specified number of decimals:
let value = 234.87352;
// console.log(value.toFixed(1));
// console.log(value.toFixed(2));
// console.log(value.toFixed(3));
// console.log(typeof value.toFixed(4)); // it also return a string


// toPrecision()
// toPrecision() returns a string, with a number written with a specified length:
let x = 32.535;
// console.log(x.toPrecision());
// console.log(x.toPrecision(3));
// console.log(x.toPrecision(5)); // it also return a string


// parseInt()
// console.log(parseInt("20 40"));
// console.log(parseInt("hello 40")); // Nan


// parseFloat()
// console.log(parseFloat("34 hk"));
// console.log(parseFloat("hk 34")); // Nan


// isInteger()
// console.log(Number.isInteger(23));  // true
// console.log(Number.isInteger("87"));  // false


// isSafeInteger()
// console.log(Number.isSafeInteger(86382));



console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);