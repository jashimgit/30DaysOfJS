// let fruits = [ 'Apple', 'Banana' ];


// // Add an element to end of an array

// let newLenght = fruits.push( 'Orange', 'test' );

// document.getElementById( 'pop' ).innerHTML = fruits;
// console.log( fruits );

// let pushItem = fruits.pop( 'test' );
// document.getElementById( 'push' ).innerHTML = pushItem;
// console.log( pushItem );
// console.log( fruits );
// Removes items from an index position
let vagetables = [ 'Cabbage', 'Turnip', 'Radish', 'Carrot', 'Tomato', 'pumpkin' ];
document.getElementById('demo').innerHTML = vagetables;

console.log( vagetables );

// let removedItems = vagetables.splice( -1, 1, 'califlower', 'Tomato' );
// console.log( removedItems );
// console.log( vagetables );
console.log( vagetables.splice( 1, 0, 'Brocli' ) );
document.getElementById('demo1').innerHTML = vagetables;
console.log( vagetables );
console.log( vagetables.splice( -5, 1, 'Ginger' ) );
document.getElementById( 'demo2' ).innerHTML = vagetables;
console.log( vagetables );