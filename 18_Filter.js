const course = ['JavaScript', 'Java', 'Python', 'Ruby on Rails', 'Kotlin'];

// const store = course.forEach((items) => {
//     console.log(items);
// });

// console.log(store); // Here, store variable does not return any value. Because forEach loop does not return any value.







const rollNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lessNums = rollNo.filter((num) => {  // filter always returns values but forEach not.
    // return num > 5;
});
console.log(lessNums);

const greaterNums = rollNo.filter((num) => {
    return (num < 5);
});
// console.log(greaterNums);

// If i use forEach then what will happen here ? .... let's see....
const big = [];
rollNo.forEach((num) => {
    if (num > 5) {
        big.push(num);
    }
});
// console.log(big);




const books = [
    {book: 'first book', genre: 'science', edition: 2004},
    {book: 'second book', genre: 'history', edition: 2002},
    {book: 'third book', genre: 'friction', edition: 2014},
    {book: 'fourth book', genre: 'non-friction', edition: 2012},
    {book: 'fifth book', genre: 'history', edition: 2021},
    {book: 'sixth book', genre: 'history', edition: 2004}
];

const bookDetails = books.filter((bk) => {
    return (bk.genre.charAt(0) === 'h');
});

// console.log(bookDetails);

