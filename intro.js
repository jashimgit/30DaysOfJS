var springColors = ["AF7575", "EFD8A1", "BCD693"];

// window.onload = init;

function init() {
  // console.log(springColors);
  var tilla = new pet("dog", "Tilla", 25, ["sleeping", "eating", "walking"]);
  console.log(tilla);
  var tillaJson = JSON.stringify(tilla);
  console.log(tillaJson);
}

const myGreeting = function() {
  console.log("Hello");
};
// myGreeting();

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 }
];
const filteredItems = items.filter(item => {
  return items.price <= 100;
});
// console.log(filteredItems);

// Find a string in a string
// indexOf() methodd reeturns the index of (the position) of the string

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(" position of locate is in : " + pos);
// searching for a string in a string

console.log(str.search("locate"));

// indexOf() and search() method are not same
// but their job is same search() method supports Regexp
// indexOf() doesn't

// Slice (start, end);

console.log(str.slice(7, 14));
// substring() method is also same but substring() cannot accept
// negative index
// substr() is similer to slice() but second parameter specifies
// the lenght of string
var srt = "Apple, Banana, Kiwi";
console.log(srt.substr(7, 7));

// string trim()
var str = "             Hi      ";
console.log(str.trim());
// convert an string to array
var shopItems =
  "Apple banana milk juice carrots beans broaklee pumpgrande tomato";
console.log(shopItems.split(" "));

// Number methods

// 1. toFixed() == returns a string, with the number writer
var x = 9.435435;
console.log(x.toFixed(2)); // 9.43 string
console.log(x.toFixed(3));
console.log(x.toFixed(4));
console.log(x.toFixed(5));

// 2. toString() returns a number as a string

console.log(x.toString());
// 3. toPrecision() returns a string, with a number with
// specified lenght

console.log(x.toPrecision());
console.log(x.toPrecision(3));

// Converting Variables to numbers
// Number(), parseInt(), parseFloat()
var x = "100";
Number(x);
x;
parseInt(x);
x;
parseFloat(x);
x;

// sorting array
// sort() method sorts an array alphabetically
// see example below

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
// reversing an array
console.log(fruits.sort());
console.log(fruits.reverse());

// Numeric Sort
// sort() method produce incorrect result when sorting number
// we can fix by providing a compare function

var points = [40, 100, 1, 5, 15, 10];

console.log(
  points.sort((a, b) => {
    a - b;
  })
);
 