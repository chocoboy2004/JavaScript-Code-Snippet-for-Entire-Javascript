const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = numbers.map((num) => {  // map returns values
    return num + 10;
});
// The only difference between map and forEach is that map can return values but forEach can't.
// map and filter both returns array insted of returning values.

console.log(newNums);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20 
]
*/

const marks = [20, 18, 17, 21, 25];
console.log(marks.map((mark) => {
  return mark;
}));  // [ 20, 18, 17, 21, 25 ]