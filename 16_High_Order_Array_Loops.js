// for of ...... loop  
// for of loop is useful for arrays, strings and maps. Don't use it on object.

// for arrays
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const values of nums) {
    // console.log(values);
};

const mixAndMatch = ['superman', 'batman', 763, 'Hello', true, null, false];
for (const values of mixAndMatch) {
    // console.log(values);
};


// for strings

const clgName = 'Swami Vivekananda Institute Of Modern Science';
for (const char of clgName) {
    // console.log(char);
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// maps
// creating map

// const newMap = new Map();
// newMap.set('country', 'India');
// newMap.set('code', 'IN');
// newMap.set('callCode', '91');
// newMap.set('c2', '92');
// newMap.delete('c2');  // Delete a particular key

// console.log(newMap);

// for (const values of newMap) {
//     // console.log(values);
// };
/*
[ 'country', 'India' ]
[ 'code', 'IN' ]
[ 'callCode', '91' ]
*/

// for (const [key, value] of newMap) {
//     // console.log(key, '=>', value);
// };
/*
-- map de-structuring
country => India
code => IN
callCode => 91
*/


// Creating a object
const games = {
    pubg: 'Players Unknown Battle Ground',
    bgmi: 'Battle Grounds Mobile India',
    ff: 'Free Fire'
};

// for (const values of games) {
//     // console.log(values);
// };

// Output
/*
for (const values of games) {
                     ^

TypeError: games is not iterable
    at Object.<anonymous> (C:\Users\Rahul Ghosh\Desktop\JavaScript_Code_and_Snippet\16_High_Order_Array_Loops.js:65:22)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v20.10.0
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// for in .... loop

const user = {
    userName: 'iamrahul',
    age: 19,
    sex: 'male',
    isLoggedInByGoogle: false,
    isLoggedInByFacebook: false,
    isLoggedInByPhoneNo: true
};

for (const key in user) {
    // console.log(key);
};
// It only returns keys
/*
userName
age
sex
isLoggedInByGoogle  
isLoggedInByFacebook
isLoggedInByPhoneNo 
*/

for (const key in user) {
    // console.log(user[key]);
};
// It only returns values
/*
iamrahul
19
male
false
false
true
*/


// map

const map = new Map();
map.set('country', 'India');
map.set('code', 'IN');
map.set('callCode', '91');

for (const value in map) {
    console.log(value);
};
