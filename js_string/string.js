// create literal string with single qoutes or double qoutes

let str = "Hi"
let greeting = 'Hello, JS'

// ES6 introduced template literal that allow to define a string
// backtick (`) characters
let name = ' John '
let message = `Hello ${name}`
console.log(greeting);
console.log(message);

// get the lenght of the string

var hi = "Good Morning";
console.log(hi.length);
// accessing characters
console.log(hi[0]);
console.log(hi[5]);
console.log(hi[6]);

// access the last characters of the string
console.log(hi[hi.length - 1]);

// assemble a string piece by piece

var className = 'btn'
className += ' btn-primary'
className += ' none'

console.log(className);

// converting values to string

var status = false;
var std = status.toString()
console.log(typeof std);
var back = Boolean(std)
console.log(typeof back);

// javascript string type
// string is primitive type
var ect = new String("Javascript String ")

// to get primitive string value, you can use the following methods

// valueOf(), toString(), toLocaleString()
console.log(ect.valueOf());
console.log(ect.toString());
console.log(ect.toLocaleString());
console.log(ect.charAt(0));
console.log(ect.charAt(1));
console.log(ect.charAt(2));
console.log(ect.charAt(3));
console.log('literal string'.toUpperCase());

// string manipulation
// 1. concatenating string
// to concatenate two or more string we can use concat()
var firstName = ' John '
var fullName = firstName.concat(' ', 'Doe')
console.log(fullName);
console.log(firstName);

// 2. extracting substring

// extract a substring with substr()
// substr(startIndex, [length]);
// substr(startIndex, endIndex)

console.log(ect.substr(0, 4));

console.log(ect.substr(10, 10));

// 3. locating substring
// locate a substring in a string with indexOf() method

console.log(ect.indexOf('String'));
console.log(ect.substr(11, 6));

// lastIndexOf() method
console.log(ect.lastIndexOf('script'));

// 4. removing whitespace 

var rawstr = 'Hi   ';
console.log(rawstr.trim());

// note that trim() method is only available in ES5
// ES6 introduced trimStrat() and trimEnd() method
 