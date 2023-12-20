// Here we will discuss some string methods

// String.prototype.at() or, String.prototype.charAt()
// Returns the character (exactly one UTF-16 code unit) at the specified index. Accepts negative integers, which count back from the last string character.
let person = "Swami Vivekananda";
// console.log(person.charAt(0));


// String.prototype.charCodeAt()
// Returns a number that is the UTF-16 code unit value at the given index.
// console.log(person.charCodeAt(2));


// String.prototype.endsWith()
// The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.
// const myCollegeName = "Swami Vivekananda Institute of Modern Science";
// console.log(myCollegeName.endsWith("Modern Science")); // True
// console.log(myCollegeName.endsWith("S"));  // False


// String.prototype.includes()
// The includes() method of String values performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
const myCollegeName = "Swami Vivekananda Institute of Modern Science";
// console.log(myCollegeName.includes("Swami"));  // True
// console.log(myCollegeName.includes("Modern science"));  // False


// String.prototype.indexOf()
// The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.
// let paragraph = "Shyam is the topper of his class. Shyam is also good in Cricket.";
// console.log(paragraph.indexOf("Shyam"));
// console.log(paragraph.indexOf("is"));


// String.prototype.lastIndexOf()
// The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.
// let paragraph = "Shyam is the topper of his class. Shyam is also good in Cricket.";
// console.log(paragraph.lastIndexOf("Shyam"));
// console.log(paragraph.lastIndexOf("is"));


// String.prototype.repeat()
// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.
// const greeting = "Hello JavaScript";
// console.log(greeting.repeat(3));


// String.prototype.replace()
// The replace() method of String values returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
// let paragraph = "Shyam is the topper of his class. Shyam is also good in Cricket.";
// console.log(paragraph.replace("Shyam", "Mr. Unknown"));  // If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.


// String.prototype.replaceAll()
// The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.
// let paragraph = "Shyam is the topper of his class. Shyam is also good in Cricket.";
// console.log(paragraph.replaceAll("Shyam", "Mr. Unknown"));
// console.log(paragraph);  // Original string will remain unchanged


// String.prototype.slice()
// The slice() method of String values extracts a section of this string and returns it as a new string, without modifying the original string.
// const greeting = "Hello JavaScript";
// console.log(greeting.slice(0, 5));  // Hello
// console.log(greeting.slice(6));  // JavaScript


// String.prototype.startsWith()
// The startsWith() method of String values determines whether this string begins with the characters of a specified string, returning true or false as appropriate.
// const greet = "Hello World";
// console.log(greet.startsWith("Hello"));  // True
// console.log(greet.startsWith("H"));  // True
// console.log(greet.startsWith("h"));  // True


// String.prototype.subString()
// const greet = "Hello World";
// console.log(greet.substring(0, 5));  // Hello
// console.log(greet.substring(6));  // World


// String.prototype.toLowerCase()
// The toLowerCase() method of String values returns this string converted to lower case.
// const greet = "Hello World";
// console.log(greet.toLowerCase());


// String.prototype.toUperCase()
// The toUpperCase() method of String values returns this string converted to uppercase.
// const greet = "Hello World";
// console.log(greet.toUpperCase());


// String.prototype.trim()
// The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.
// const message = "   Happy New Year   ";
// console.log(message.trim());  // Happy New Year
// console.log(message);         //    Happy New Year


// String.prototype.trimStart()
// The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.
// const message = "   Happy New Year";
// console.log(message);              //   Happy New Year    
// console.log(message.trimStart());  //Happy New Year


// String.prototype.trimEnd()
// The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.
const message = "Happy New Year   ";
console.log(message);                  
console.log(message.trimEnd());  