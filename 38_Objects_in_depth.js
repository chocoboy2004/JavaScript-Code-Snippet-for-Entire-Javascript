const PIValue = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(PIValue);


const user = {
    userid: 'rahulghosh2004',
    username: 'rahulghosh',
    password: '1234'
}

console.log(Object.getOwnPropertyDescriptor(user, 'userid'));
/*
{
  value: 'rahulghosh2004',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

Object.defineProperty(user, 'userid', {
    writable: false,
    enumerable: false,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(user, 'userid'));
/*
{
  value: 'rahulghosh2004',
  writable: false,
  enumerable: false,
  configurable: false
}
*/