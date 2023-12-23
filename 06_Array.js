// Creating an array

/*
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/ 
// const myArr = [0, 1, 2, 3, 4, "rahul", true, null];
// console.log(myArr);  // [ 0, 1, 2, 3, 4, 'rahul', true, null ]

// console.log(myArr.length);  // length is 8. Using .length property, we can find out the length of an array. Please keep in mind that .length is only a property not a method.

// Accessing array elements by its index value
// console.log(myArr[0]);  // 0
// console.log(myArr[1]);  // 1
// console.log(myArr[2]);  // 2
// console.log(myArr[3]);  // 3
// console.log(myArr[4]);  // 4
// console.log(myArr[5]);  // 'rahul'
// console.log(myArr[6]);  // true
// console.log(myArr[7]);  // null

// -----------------------------------------------------------------------------------------

/*
   Discussion of array methods starts from here,
*/

// 1. Array.prototype.push() --------------------------------------------------------
// The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

let array = [10, 20, 30, 40, 50, 60];
// console.log(array);  // [ 10, 20, 30, 40, 50, 60 ]
// console.log(array.length);  // 6
// array.push(70);
// array.push(80);
// console.log(array);  // [10, 20, 30, 40, 50, 60, 70, 80]
// console.log(array.length); // 8. We can say that push() mathod changes the original array.



// 2. Array.prototyupe.pop() -------------------------------------------------------------
// The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

const myHeros = ['Flash', 'Bat Man', 'Super Man', 'Iron Man', 'Dr. Strange', 'Spider Man'];
// console.log(myHeros.length);  // 6
// myHeros.pop();
// myHeros.pop();
// myHeros.pop();
// console.log(myHeros.length);  // 3. It also changes the original array.
// console.log(myHeros);  // [ 'Flash', 'Bat Man', 'Super Man' ]



// 3. Array.prototype.unshift() ------------------------------------------------------------------
// The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

// console.log(myHeros.length); // 6
// myHeros.unshift('Loki');
// console.log(myHeros.length); // 7. It also changes the original array.
// console.log(myHeros);
/*
[
  'Loki',
  'Flash',
  'Bat Man',
  'Super Man',
  'Iron Man',
  'Dr. Strange',
  'Spider Man'
]
*/



// 4. Array.prototype.shift() ----------------------------------------------------------------
// The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

// console.log(myHeros.length);  // 6
// myHeros.shift();
// myHeros.shift();
// myHeros.shift();
// console.log(myHeros.length);  // 3. It also changes the original array.
// console.log(myHeros);  // [ 'Iron Man', 'Dr. Strange', 'Spider Man' ]




// 5. Array.prototype.slice() -------------------------------------------------------------
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// console.log(myHeros.length); // 6
// console.log(myHeros.slice(1, 3));  // [ 'Bat Man', 'Super Man' ]
// console.log(myHeros.length); // 6. It doesn't effect the original array.




// 6. Array.prototype.splice()
// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// console.log(myHeros.length); // 6
// myHeros.splice(3, 0, 'Captain America');
// console.log(myHeros.length);  // 7. It changes the original array.
// console.log(myHeros);
/*
[
  'Flash',
  'Bat Man',
  'Super Man',
  'Captain America',
  'Iron Man',
  'Dr. Strange',
  'Spider Man'
]
*/

// **** The difference between slice and splice is that slice method doesn't change the original array but splice method can.




// 7. Array.prototype.includes() ---------------------------------------------------------
// The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

const marks = [20, 25, 11, 9, 30];
// console.log(marks.includes(20));  // It prints true bcz 20 is present inside the array.
// console.log(marks.includes(0));  // It prints false bcz 0 is not present inside the array.



// 8. Array.prototype.indexOf() -----------------------------------------------------------
// The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.

// console.log(marks.indexOf(30));  // Index is 4
// console.log(marks.indexOf(12));  // It prints -1 because 12 is not present inside the array



// 9. Array.prototype.join() ----------------------------------------------------------------
// The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const roll = [201, 202, 203, 204, 205];
// console.log(roll.join( )); // 201,202,203,204,205
// let value = roll.join();
// console.log(typeof value); // string



// 10. Array.prototype.concat() ----------------------------------------------------
// The concat() method of String values concatenates the string arguments to this string and returns a new string.

let marvel_heros = ['ironman', 'captain america', 'dr. strange', 'thor', 'hulk', 'loki'];
let dc_heros = ['batman', 'superman', 'flash', 'wonder women'];
// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);
/*
[
  'ironman',
  'captain america',
  'dr. strange',
  'thor',
  'hulk',
  'loki',
  'batman',
  'superman',
  'flash',
  'wonder women'
]
*/

// We can also concat two or more arrays in a single array using dot operator (...).
let allHeros = [...marvel_heros, ...dc_heros];
// console.log(allHeros);
/*
[
  'ironman',
  'captain america',
  'dr. strange',
  'thor',
  'hulk',
  'loki',
  'batman',
  'superman',
  'flash',
  'wonder women'
]
*/ 

// let my_name = 'Rahul';
// let arr = [...my_name]; // [ 'R', 'a', 'h', 'u', 'l' ]
// console.log(arr);




// 11. Array.prototype.flat() ---------------------------------------------------------------
// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array = [10, 20, [30, 40, 50], 60, 70, [80, 90, [100, 200]]];
// console.log(another_array); // [ 10, 20, [ 30, 40, 50 ], 60, 70, [ 80, 90, [ 100, 200 ] ] ]
// const usable_another_array = another_array.flat(2);
// console.log(usable_another_array);
 /*
[
   10, 20, 30, 40,  50,
   60, 70, 80, 90, 100,
  200
]
*/





// 12. Array.prototype.isArray() ---------------------------------------------------------------
// The Array.isArray() static method determines whether the passed value is an Array.

let new_array = [1, 2, 3];
let my_name = 'rahul';
// console.log(Array.isArray(new_array)); // true
// console.log(Array.isArray(my_name)); // false
// console.log(Array.isArray([...my_name])); // true