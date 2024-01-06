const myNums = [1, 2, 3, 4];

const sumOfNums = myNums.reduce((prevValue, currValue) => {
    return prevValue + currValue
}, 0);

// console.log(sumOfNums);