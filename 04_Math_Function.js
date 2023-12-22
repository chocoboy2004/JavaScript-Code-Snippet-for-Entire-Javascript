// Math.PI (Static Function) & Math.pow(x, y)
/*
  Math.PI()
  The Math.PI static data property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.

  Math.pow(x, y)
  The Math.pow() static method returns the value of a base raised to a power. That is
*/ 
let radius = 20;
// console.log(`Area of the circle is ${2 * Math.PI * Math.pow(radius, 2)}`);



// Math.SQRT2
// The Math.SQRT2 static data property represents the square root of 2, approximately 1.414.
// console.log(Math.SQRT2);



// Math.random()
// The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
// let value = Math.random() * 10;
// console.log(value);
// if (value !== Number.NaN) {
//     console.log("It is a number");
// }




//Math.round()
// The Math.round() static method returns the value of a number rounded to the nearest integer.
// let valueOfPI = Math.PI;
// let absoluteValue = Math.round(valueOfPI);
// console.log(absoluteValue);  // 3



// Math.max() && Math.min()
/* 
   Math.max()
   The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.

   Math.min()
   The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
*/ 
let maxValue = Math.max(20, 21, 22, 1 ,90);
let minValue = Math.min(20, 21, 22, 1 ,90);
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(maxValue); // 90
// console.log(Math.max(...numbers));  // 10
// console.log(minValue);  // 1
// console.log(Math.min(...numbers));  // 1




// Math.floor()
// The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
console.log(Math.floor(23.9));  // 23
